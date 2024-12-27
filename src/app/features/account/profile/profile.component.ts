import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeProfileForm();
    this.getUserProfile();
  }

  initializeProfileForm() {
    this.profileForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
  }

  getUserProfile() {
    this.userService.getUserByUserId().subscribe((res: any) => {
      this.profileForm.patchValue(res.data);

      this.profileForm.get('firstName')?.disable();
      this.profileForm.get('lastName')?.disable();
    });
  }

  onSubmit() {
    const payload = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      mail: this.profileForm.value.mail,
      phoneNumber: this.profileForm.value.phoneNumber,
    };

    this.userService.updateUserByUserId(payload).subscribe((res) => {
      this.getUserProfile();
    });
  }
}
