import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../models/Tasks.interface';
import { TasksService } from '../services/tasks-service/tasks.service';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksSubscription: Array<any> = [];

  constructor(private tasksService: TasksService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getParams();
  }
  getParams(): void{
    this.route.queryParams
    .pipe(filter((params: any) => params.id))
    .subscribe((params: any) => {
      this.getTasks(params.id);
    });

  }
  getTasks(id: string): void{
    //In this case we send the ID as parameters but since we are mocking the service
    //we are going to collect all the values and do the filtering by id
    let tasksSubs: any;
    this.tasksService.getTasks().subscribe((tasks) => {
      tasksSubs = tasks;
    })
    tasksSubs.forEach((tasks: Tasks) => {
      if(tasks.idUser === id) this.tasksSubscription.push(tasks);
    })
    console.log(this.tasksSubscription)
  }
  delete(id: string){
    //in this case we would send the id and delete it from the database
    this.tasksSubscription.forEach((task) => {
      if(task.id === id){
        const index = this.tasksSubscription.indexOf(task.id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.tasksSubscription.splice(index, 1);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
  add(){

  }

}
