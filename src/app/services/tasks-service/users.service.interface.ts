import { Observable } from "rxjs";
import { Tasks } from "src/app/models/Tasks.interface";

export interface ITasks {

  getTasks(): Observable<Tasks[]>
}
