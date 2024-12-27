import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [CommonModule, OnboardingRoutingModule, ReactiveFormsModule],
})
export class OnboardingModule {}
