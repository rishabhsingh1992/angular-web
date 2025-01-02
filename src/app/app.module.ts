import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feature Pages
import { CollectionComponent } from './features/pages/collection/collection.component';
import { HomeComponent } from './features/pages/home/home.component';
import { ListingComponent } from './features/pages/listing/listing.component';
import { OnboardingComponent } from './features/pages/onboarding/onboarding.component';

import { AboutUsComponent } from './features/static-pages/about-us/about-us.component';
import { CareersComponent } from './features/static-pages/careers/careers.component';
import { ContactUsComponent } from './features/static-pages/contact-us/contact-us.component';
import { FaqsComponent } from './features/static-pages/faqs/faqs.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { HeaderComponent } from './features/components/header/header.component';
import { LoginComponent } from './features/components/login/login.component';
import { SignUpComponent } from './features/components/sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './features/static-pages/privacy-policy/privacy-policy.component';
import { SitemapComponent } from './features/static-pages/sitemap/sitemap.component';
import { PageNotFoundComponent } from './features/static-pages/page-not-found/page-not-found.component';
import { SellerComponent } from './features/seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CareersComponent,
    ContactUsComponent,
    FaqsComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    SitemapComponent,
    PageNotFoundComponent,
    CollectionComponent,
    ListingComponent,
    SellerComponent,
    OnboardingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
