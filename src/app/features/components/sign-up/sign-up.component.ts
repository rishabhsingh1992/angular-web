import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
// import { ISignUpResponse } from '../../../core/models/auth.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.initializeSignUpForm();
  }

  initializeSignUpForm() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      mail: ['', [Validators.required, Validators.email]],
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
    // const signUppayload = {
    //   firstName: this.signUpForm.controls['firstName'].value,
    //   lastName: this.signUpForm.controls['lastName'].value,
    //   mail: this.signUpForm.controls['mail'].value,
    //   password: this.signUpForm.controls['password'].value,
    //   phoneNumber: this.signUpForm.controls['phoneNumber'].value,
    // };

    const signUppayload = {
      firstName: this.signUpForm.controls['firstName'].value,
      lastName: this.signUpForm.controls['lastName'].value,
      mail: this.signUpForm.controls['mail'].value,
      password: this.signUpForm.controls['password'].value,
      phoneNumber: this.signUpForm.controls['phoneNumber'].value,
    };

    this.auth.signUp(signUppayload).subscribe((res) => {
      if (res.status === 'success') {
        const loginPayload = {
          emailOrPhone: this.signUpForm.controls['phoneNumber'].value,
          password: this.signUpForm.controls['password'].value,
        };
        this.auth.login(loginPayload);
      }
    });
  }
}
