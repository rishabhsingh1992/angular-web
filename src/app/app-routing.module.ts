import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/pages/home/home.component';
import { CollectionComponent } from './features/pages/collection/collection.component';
import { PageNotFoundComponent } from './features/static-pages/page-not-found/page-not-found.component';
import { ListingComponent } from './features/pages/listing/listing.component';

const routes: Routes = [
  { path: 'collections/:collectionId', component: CollectionComponent },
  { path: 'listings/:listingId', component: ListingComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('./modules/seller/seller.module').then((m) => m.SellerModule),
    canActivate: [AuthGuard],
  },
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
