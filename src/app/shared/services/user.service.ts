import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private rolesSubject: BehaviorSubject<string[]>;

  constructor(private http: HttpClient) {
    const roles = this.getUserRolesFromLocalStorage();
    this.rolesSubject = new BehaviorSubject<string[]>(roles);
  }

  private getUserRolesFromLocalStorage(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  private getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getUserByUserId() {
    const userId = this.getUserId();

    const params = userId
      ? new HttpParams().set('userId', userId)
      : new HttpParams();

    return this.http.get('http://localhost:3000/api/user/get-user-by-user-id', {
      params,
    });
  }

  updateUserByUserId(userBody: any) {
    const userId = this.getUserId();

    return this.http.put(
      'http://localhost:3000/api/user/update-user-by-user-id',
      { userBody, userId }
    );
  }

  getUserRoles() {
    return this.rolesSubject.asObservable();
  }

  updateUserRoles(roles: string[]) {
    localStorage.setItem('roles', JSON.stringify(roles));
    this.rolesSubject.next(roles);
  }

  onboardSeller(body: any) {
    return this.http.post("http://localhost:3000/api/user/seller-onboard", {
      ...body,
      userId: this.getUserId(),
    });
  }
}
