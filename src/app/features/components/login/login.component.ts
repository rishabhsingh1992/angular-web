import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  onSubmit() {
    const payload = {
      emailOrPhone: this.loginForm.controls['emailOrPhone'].value,
      password: this.loginForm.controls['password'].value,
    };

    // const payload = {
    //   numberOrEmail: this.loginForm.controls['emailOrPhone'].value,
    //   password: this.loginForm.controls['password'].value,
    // };

    this.auth.login(payload);
  }
}
