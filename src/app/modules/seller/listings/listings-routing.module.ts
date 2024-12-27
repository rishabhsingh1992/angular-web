import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings.component';

import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', component: ListingsComponent },
  { path: 'add', component: ListingComponent },
  { path: 'edit/:listingId', component: ListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}
