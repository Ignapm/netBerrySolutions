import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../models/Tasks.interface';
import { TasksService } from '../services/tasks-service/tasks.service';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasksSubscription: Array<any> = [];
  id: string = '';

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getParams();
  }
  getParams(): void {
    this.route.queryParams
      .pipe(filter((params: any) => params.id))
      .subscribe((params: any) => {
        this.id = params.id;
        this.getTasks(this.id);
      });
  }
  getTasks(id: string): void {
    //In this case we send the ID as parameters but since we are mocking the service
    //we are going to collect all the values and do the filtering by id
    let tasksSubs: any;
    this.tasksService.getTasks().subscribe((tasks) => {
      tasksSubs = tasks;
    });
    tasksSubs.forEach((tasks: Tasks) => {
      if (tasks.idUser === id) this.tasksSubscription.push(tasks);
    });
  }
  delete(id: string) {
    //in this case we would send the id and delete it from the database
    this.tasksSubscription.forEach((task) => {
      if (task.id === id) {
        const index = this.tasksSubscription.indexOf(task);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.tasksSubscription.splice(index, 1);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        });
      }
    });
  }
  add(task?: Tasks) {
    //in this case we should send the new task and it would return it to us with the id given in the database
    if (task) {
      this.dialog.open(AddTaskComponent, {
        height: '310px',
        width: '500px',
        data: { id: task.id, description: task.description, name: task.task },
      }).afterClosed()
      .subscribe((params) => {
        let index = 0;
        const task = {
          task: params.task,
          description: params.description,
          idUser: this.id,
          id: params.id,
        };
        this.tasksSubscription.forEach((task) => {
          index = this.tasksSubscription.indexOf(task);
        })
        this.tasksSubscription.splice(index, 1, task );
      });
    } else {
      this.dialog
        .open(AddTaskComponent, {
          height: '310px',
          width: '500px',
        })
        .afterClosed()
        .subscribe((params) => {
          const task = {
            task: params.task,
            description: params.description,
            idUser: this.id,
            id: this.tasksSubscription.length,
          };
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.tasksSubscription.push(task);
        });
    }
  }
}
