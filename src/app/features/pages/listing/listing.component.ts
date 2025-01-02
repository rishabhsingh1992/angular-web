import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../../shared/services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {
  listing: any;
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const listingId = params['listingId'];
      this.getListingByListingId(listingId);
    });
  }

  getListingByListingId(listingId: string) {
    this.listingService
      .getListingByListingIdService(listingId)
      .subscribe((res: any) => {

        this.listing = res.data[0];
        console.log("info", this.listing);
      });
  }

  addToCart() {
    console.log("Added to cart", this.listing);
  }
}
