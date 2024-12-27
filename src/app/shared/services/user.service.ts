import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: string | null = localStorage.getItem('userId');

  constructor(private http: HttpClient) {}

  getUserByUserId() {
    const params = this.userId
      ? new HttpParams().set('userId', this.userId)
      : new HttpParams();

    return this.http.get('http://localhost:3000/api/user/get-user-by-user-id', {
      params,
    });
  }

  updateUserByUserId(userBody: any) {
    return this.http.put(
      'http://localhost:3000/api/user/update-user-by-user-id',
      { userBody, userId: this.userId }
    );
  }

  private rolesSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem('roles') || '[]')
  );

  getUserRoles() {
    return this.rolesSubject.asObservable();
  }

  updateUserRoles(roles: string[]) {
    localStorage.setItem('roles', JSON.stringify(roles));
    this.rolesSubject.next(roles);
  }
}
