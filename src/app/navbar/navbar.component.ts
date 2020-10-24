import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginUser: any = {};
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginUser);
  }

  logOut() {
    this.authService.logOut();
  }

   isAuthenticated() {
    return !!localStorage.getItem("token");
    //return this.authService.loggedIn();
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
