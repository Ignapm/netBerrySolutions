import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasks } from 'src/app/models/Tasks.interface';
import { ITasks } from './users.service.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService implements ITasks {

  getTasks(): Observable<Tasks[]> {
    return of([
      {
        idUser: '1',
        task: 'task 1',
        description: 'description 1',
        id: '1',
      },
      {
        idUser: '1',
        task: 'task 2',
        description: 'description 2',
        id: '2',
      },
      {
        idUser: '1',
        task: 'task 3',
        description: 'description 3',
        id: '3',
      },
    ]);
  }
}
