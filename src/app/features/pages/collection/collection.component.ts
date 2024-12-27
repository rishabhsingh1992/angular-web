import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../../shared/services/listing.service';
// import { CollectionService } from '../../../shared/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent implements OnInit {
  listings: any;
  products: any;
  id: any;
  categories: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService // private collectionService: CollectionService, // private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const collectionId = params['collectionId'];
      this.getListings(collectionId);
    });
  }

  getListings(collectionId: string) {
    this.listingService
      .getListingsByCollectionId(collectionId)
      .subscribe((res: any) => {
        this.listings = res.listings;
        console.log(this.listings);
      });
  }

  navigateToListing(listingId: string) {
    console.log(listingId);
    this.router.navigate(['listings', listingId]);
  }
}
