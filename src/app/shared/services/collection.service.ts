import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  getListingsByCollectionId(collectionId: string) {
    return this.http.get(
      'http://localhost:3000/api/listings/' + collectionId
    );
  }
}
