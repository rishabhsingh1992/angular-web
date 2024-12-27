import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { OnboardingService } from './onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  userId: string | null = null;
  user: any;

  categories = [
    { icon: '<i class="bi bi-box"></i>', name: 'Plants' },
    { icon: '<i class="bi bi-box"></i>', name: 'Seeds' },
    { icon: '<i class="bi bi-box"></i>', name: 'Pots' },
  ];

  selectedCategory: string = '';
  sellerOnboardingForm: FormGroup = this.fb.group({});

  statesAndUnionTerritories: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private onboardingService: OnboardingService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.statesAndUnionTerritories = JSON.parse(
      localStorage.getItem('statesAndUnionTerritories') || '[]'
    );

    this.getUserByUserId();
    this.initializeSellerOnboardingForm();
  }

  getUserByUserId() {
    this.userService.getUserByUserId().subscribe((res: any) => {
      if (res) {
        const user = res.data;

        this.sellerOnboardingForm.patchValue(user);
        this.sellerOnboardingForm.get('firstName')?.disable();
        this.sellerOnboardingForm.get('lastName')?.disable();
        this.sellerOnboardingForm.get('phoneNumber')?.disable();
        this.sellerOnboardingForm.get('mail')?.disable();
      }
    });
  }

  selectCategory(categoryName: string): void {
    this.selectedCategory = categoryName;
  }

  initializeSellerOnboardingForm() {
    this.sellerOnboardingForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      addressLine1: [null, [Validators.required]],
      addressLine2: [null],
      city: [null, [Validators.required]],
      district: [null],
      state: [null, [Validators.required]],
      postalCode: [null, [Validators.required]],
      landmark: [null],
      storeName: [null, [Validators.required]],
    });
  }

  onSubmit() {
    const payload = {
      address: {
        firstName: this.sellerOnboardingForm.controls['firstName'].value,
        lastName: this.sellerOnboardingForm.controls['lastName'].value,
        phoneNumber: this.sellerOnboardingForm.controls['phoneNumber'].value,
        addressLine1: this.sellerOnboardingForm.controls['addressLine1'].value,
        addressLine2: this.sellerOnboardingForm.controls['addressLine2'].value,
        city: this.sellerOnboardingForm.controls['city'].value,
        district: this.sellerOnboardingForm.controls['district'].value,
        state: this.sellerOnboardingForm.controls['state'].value,
        postalCode: this.sellerOnboardingForm.controls['postalCode'].value,
        landmark: this.sellerOnboardingForm.controls['landmark'].value,
        alias: 'store',
      },
      seller: {
        storeName: this.sellerOnboardingForm.controls['storeName'].value,
      },
    };

    this.onboardingService.onboardSeller(payload).subscribe((res: any) => {
      if (res) {
        const sellerId = res.data.sellerRecord.sellerId;
        this.userService.updateUserRoles(res.data.roles);
        localStorage.setItem('sellerId', sellerId);
        this.navigateToListing();
      }
    });
  }

  navigateToListing() {
    this.router.navigateByUrl('/seller/listings');
  }
}
