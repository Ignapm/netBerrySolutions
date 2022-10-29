import { Observable } from "rxjs";
import { Users } from "src/app/models/users.interface";

export interface UsersInterface {

  getUsers(): Observable<Users[]>
}
