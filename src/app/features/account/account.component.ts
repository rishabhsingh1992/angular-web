import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  firstName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.firstName = localStorage.getItem('firstName');
  }

  logout() {
    this.authService.logout();
  }
}
