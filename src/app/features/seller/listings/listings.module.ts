import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ListingComponent } from './listing/listing.component';
import { SellerListingsCategoryTransformPipe } from '../../../shared/pipes/seller-listings-category-transform.pipe';

@NgModule({
  declarations: [
    ListingsComponent,
    ListingComponent,
    SellerListingsCategoryTransformPipe,
  ],
  imports: [CommonModule, ListingsRoutingModule, ReactiveFormsModule],
})
export class ListingsModule {}
