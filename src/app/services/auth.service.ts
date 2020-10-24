import { Injectable } from '@angular/core';
import { LoginUser } from '../models/LoginUser';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
    public jwtHelper: JwtHelperService
  ) { }


  path = "http://localhost:8000/auth/";
  userToken: any;
  decodedToken: any;
  TOKEN_KEY = "token";

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient.post(this.path + "login", loginUser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data['access_token']);
        this.userToken = data['access_token'];
        this.decodedToken = this.jwtHelper.decodeToken(data['access_token']);
        this.alertifyService.success("Giriş başarılı.")
        this.router.navigateByUrl('/city')
      });
  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data => {
        console.log(data);
        if(data['access_token']){
          this.alertifyService.success("Kayıt başarılı.")
        }else if(data['message']){
          console.log(data['message']);
        }
        
      })
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error("Çıkış Başarılı");
    
  }

  loggedIn(){
    return this.jwtHelper.isTokenExpired(this.TOKEN_KEY);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(localStorage.getItem(this.token)).email;
  }
}
