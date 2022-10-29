import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users.interface';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  async login() {
    let users: any;
    this.usersService.getUsers().subscribe((users1: Users[]) => {
      users = users1;
    });

    users.forEach((u: any) => {
      if (u.email === this.email && u.password === this.password) {
        this.router.navigate(['/register']);
      }
    });
  }
}
