import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private _listingId: string = '';
  private apiUrl: string = '';

  userId: string | null = localStorage.getItem('sellerId');
  // userId: string | null = "674ea6af349791add68cd765";
  userIdObj = { userId: this.userId };

  constructor(private http: HttpClient) {}

  set listingId(id: string) {
    this._listingId = id;
  }

  get listingId() {
    return this._listingId;
  }

  getSellerId() {
    return localStorage.getItem('sellerId');
  }

  getAllCategories() {
    return this.http.get('http://localhost:3000/api/category');
  }

  getAllListings(sellerId: string | null) {
    const params = sellerId
      ? new HttpParams().set('sellerId', sellerId)
      : new HttpParams();

    return this.http.get(
      'http://localhost:3000/api/listings/get-listings-by-seller-id',
      { params }
    );
  }

  getListingById(listingId: string | null) {
    console.log(listingId);
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

  addListing(body: any) {
    const sellerId = this.getSellerId();
    
    const params = sellerId
      ? new HttpParams().set('sellerId', sellerId)
      : new HttpParams();

    return this.http.post(
      'http://localhost:3000/api/listing/add-listing',
      body,
      { params }
    );
  }

  editListing(listingId: string | null, listingPayload: any) {
    return this.http.put('http://localhost:3000/api/listing/edit-listing', {
      listingId,
      listingPayload,
    });
  }

  deleteListing(id: string) {}

  uploadImage(fileObj: any) {
    console.log(fileObj);
    return this.http.post(
      'http://localhost:3000/api/listing/add-listing-image',
      fileObj
    );
  }
}
