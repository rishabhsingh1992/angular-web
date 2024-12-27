import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  getListingsByCollectionId(collectionId: string) {
    const params = collectionId
      ? new HttpParams().set('collectionId', collectionId)
      : new HttpParams();

    return this.http.get(
      'http://localhost:3000/api/listings/get-listings-by-category-name/',
      { params }
    );
  }

  getListingByListingIdService(listingId: string) {
    // return this.http.get('http://localhost:3000/api/listing/' + listingId);

    const params = listingId
      ? new HttpParams().set('listingId', listingId)
      : new HttpParams();

    return this.http.get(
      'http://localhost:3000/api/listing/get-listing-by-listing-id',
      {
        params,
      }
    );
  }
}
