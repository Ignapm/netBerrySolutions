import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.password !== this.confirmPassword){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to type the same password!',
      })
    }else if(this.email && this.password && this.confirmPassword){
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.router.navigate(['/login']);
    }
  }

}
