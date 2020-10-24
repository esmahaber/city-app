import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: any = {};


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerUser);
    this.authService.register(this.registerUser);
  }

}
