import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/Users.interface';
import { UsersService } from '../services/users-service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    let users: any;
    this.usersService.getUsers().subscribe((usersSubs: Users[]) => {
      users = usersSubs;
    });
    let boolean = false;
    let id = '';
    users.forEach((u: any) => {
      if (u.email === this.email && u.password === this.password) {
        boolean = true;
        id = u.id;
      }
    });
    let lengthUsers = users.length;
    if(boolean) this.router.navigate(['/tasks'], { queryParams: { id } });
    else if(localStorage.getItem('email') === this.email && localStorage.getItem('password') === this.password){
      this.router.navigate(['/tasks'], { queryParams: { lengthUsers } });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect username or password.',
      })
    }
  }
}
