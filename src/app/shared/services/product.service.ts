import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(id: string) {}

  getProductById(id: string) {}

  addProduct(payload: IProduct) {
    return this.http.post('', payload);
  }

  updateProduct(id: string, payload: IProduct) {}

  deleteProduct(id: string) {}

  getAllListingsByCategoryId(id: string | null) {
    return this.http.get(`http://localhost:3000/api/collection/${id}`);
  }

  getCategoryFromRoute(collectionId: string) {
    return this.http.get(
      `http://localhost:3000/api/category/${'trees_shrubs'}`
    );

    // this.getProducts(category);
    // console.log(category);
  }
}
