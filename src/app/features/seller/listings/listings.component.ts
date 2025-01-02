import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.scss',
})
export class ListingsComponent implements OnInit {
  sellerId: string | null = null;
  listings: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.sellerId = localStorage.getItem('sellerId');
    this.getAllListings();
  }

  getAllListings() {
    this.listingService.getAllListings(this.sellerId).subscribe((res: any) => {
      this.listings = res.listings;
      console.log("listings", this.listings);
    });
  }

  editListing(listingId: string) {
    this.router.navigate(['edit', listingId], { relativeTo: this.route });
  }

  deleteListing() {
    console.log('listing deleted');
  }
}
