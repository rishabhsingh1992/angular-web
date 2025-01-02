import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CollectionComponent } from './features/pages/collection/collection.component';
import { HomeComponent } from './features/pages/home/home.component';
import { ListingComponent } from './features/pages/listing/listing.component';
import { OnboardingComponent } from './features/pages/onboarding/onboarding.component';
import { PageNotFoundComponent } from './features/static-pages/page-not-found/page-not-found.component';
import { SellerComponent } from './features/seller/seller.component';

const routes: Routes = [
  { path: 'collections/:collectionId', component: CollectionComponent },
  { path: 'listings/:listingId', component: ListingComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  { path: 'seller/onboarding', component: OnboardingComponent },
  {
    path: 'seller/listings',
    loadChildren: () =>
      import('./features/seller/listings/listings.module').then(
        (m) => m.ListingsModule
      ),
  },
  { path: 'seller', component: SellerComponent, canActivate: [AuthGuard] },
  {
    path: 'pages',
    loadChildren: () =>
      import('./features/static-pages/static-pages.module').then(
        (m) => m.StaticPagesModule
      ),
  },

  { path: '', title: 'GrowIt', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
