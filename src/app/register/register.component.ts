import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  register(){

  }

}
