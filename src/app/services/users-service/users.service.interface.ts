import { Observable } from "rxjs";
import { Users } from "src/app/models/Users.interface";

export interface IUsers {

  getUsers(): Observable<Users[]>
}
