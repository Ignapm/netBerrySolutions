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
        task: 'Get hired at netberry solutions',
        description: 'Do the technical test',
        id: '1',
      },
      {
        idUser: '1',
        task: 'Send technical test',
        description: 'Send technical test to Helena Pascual',
        id: '2',
      },
      {
        idUser: '1',
        task: 'Last interview ',
        description: 'Have an interview with the application analyst',
        id: '3',
      },
    ]);
  }
}
