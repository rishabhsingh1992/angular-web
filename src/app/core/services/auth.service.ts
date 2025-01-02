import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IUserLoginRequest,
  IUserLoginResponse,
  IUserSignUpRequest,
  IUserSignUpResponse,
} from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn = localStorage.getItem('userId') ? true : false;
  roles = JSON.parse(localStorage.getItem('roles') || '[]');

  private loginStateSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn);
  private rolesSubject = new BehaviorSubject<string[]>(this.roles);

  constructor(private http: HttpClient, private router: Router) {}

  getLoginState() {
    return this.loginStateSubject.asObservable();
  }

  updateLoginState() {
    const loginState = localStorage.getItem('userId') ? true : false;
    this.loginStateSubject.next(loginState);
  }

  getRoles() {
    return this.rolesSubject.asObservable();
  }

  updateRoles() {
    const roles: string[] = JSON.parse(localStorage.getItem('roles') || '[]');
    this.rolesSubject.next(roles);
  }

  login(loginPayload: IUserLoginRequest) {
    return this.http
      .post<IUserLoginResponse>(
        'http://localhost:3000/api/user/login',
        // 'https://test1334-b2aaahhdh9d5bkhk.southindia-01.azurewebsites.net/api/User/Login',
        loginPayload
      )
      .subscribe((res: any) => {
        if (res && res.status === 'success') {
          const user = res.data;
          localStorage.setItem('userId', user.id);
          localStorage.setItem('firstName', user.firstName);
          localStorage.setItem('roles', JSON.stringify(user.roles));
          this.updateLoginState();
          this.updateRoles();
        }
      });
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('roles');
    localStorage.removeItem('sellerId');
    this.updateLoginState();
    this.router.navigate(['/']);
  }

  signUp(signUpPayload: IUserSignUpRequest) {
    return this.http.post<IUserSignUpResponse>(
      'http://localhost:3000/api/user/sign-up',
      // 'http://localhost:5095/api/user',
      // 'https://test1334-b2aaahhdh9d5bkhk.southindia-01.azurewebsites.net/api/User/SignUp',
      signUpPayload
    );
  }
}
