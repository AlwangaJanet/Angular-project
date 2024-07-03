import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUser, LoginReq, LoginResponse, RegisterResponse } from '../models'
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = "http://localhost:4000/auth/"

  constructor(private http: HttpClient) {}

  registerUser(newUser: AddUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.Base_URL + "register", newUser)
  }

  loginUser(user: LoginReq): Observable<LoginResponse> {
    console.log('Login request:', user); // Log the request body
    return this.http.post<LoginResponse>(this.Base_URL + 'login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  decodeToken(token: string): any {
    return jwtDecode(token)
  }
}
