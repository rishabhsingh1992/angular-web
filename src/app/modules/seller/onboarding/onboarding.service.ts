import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  userId = localStorage.getItem('userId');

  constructor(private http: HttpClient) {}

  onboardSeller(body: any) {
    return this.http.post(`http://localhost:3000/api/user/seller-onboard`, {
      ...body,
      userId: this.userId,
    });
  }
}
