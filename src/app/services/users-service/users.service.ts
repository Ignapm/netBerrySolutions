import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users.interface';
import { Observable, of } from 'rxjs';
import { UsersInterface } from './users.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements UsersInterface {

  getUsers(): Observable<Users[]>{
    return of([
      {
        email: 'Sylvia21@yahoo.com',
        password: '8WHzeEPQbDFECFc',
        id: '1'
      },
      {
        email: 'Roel.Barton80@yahoo.com',
        password: '6KmGPSNXPAbFG15',
        id: '2'
      },
      {
        email: 'Jeanie67@hotmail.com',
        password: 's_hk7_iQWAiMXfx',
        id: '3'
      },
      {
        email: 'Judah.Jacobs43@yahoo.com',
        password: 'YUNmzZdSvs_c2mC',
        id: '4'
      },
      {
        email: 'Manley17@yahoo.com',
        password: '6h3WxJPOreqDshV',
        id: '5'
      }
    ])
  }
}
