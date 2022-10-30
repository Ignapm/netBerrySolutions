import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  descriptionTask!: string;
  nameTask!: string;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: string; description: string; name: string }
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.nameTask = this.data.name;
      this.descriptionTask = this.data.description;
    }
  }

  close(): void {
    this.dialogRef.close();
  }
  addTask(): void {
    let params = {
      task: this.nameTask,
      description: this.descriptionTask,
      id: ''
    };
    if(this.data)
    params = {...params, id: this.data.id}
    this.dialogRef.close(params);
  }
}
