import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  firstName: string | null = null;

  ngOnInit(): void {
    this.firstName = localStorage.getItem('firstName');
  }
}
