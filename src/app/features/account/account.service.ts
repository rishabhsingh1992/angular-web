import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getAddressesByUserId() {
    const userId = this.getUserId();

    const params = userId
      ? new HttpParams().set('userId', userId)
      : new HttpParams();

    return this.http.get<any>(
      'http://localhost:3000/api/address/get-addresses-by-user-id',
      {
        params,
      }
    );
  }

  getAddressByAddressId(id: string | null) {
    return this.http.get(`http://localhost:3000/api/editaddress/${id}`);
  }

  addAddress(payload: any) {
    const userId = this.getUserId();

    const params = userId
      ? new HttpParams().set('userId', userId)
      : new HttpParams();

    return this.http.post(
      'http://localhost:3000/api/address/add-address',
      payload,
      { params }
    );
  }

  updateAddress(addressId: string | null, payload: any) {
    const userIdObj = { userId: this.getUserId() };

    return this.http.put(
      `http://localhost:3000/api/address/update-address-by-address-id`,
      {
        addressId,
        ...userIdObj,
        payload,
      }
    );
  }

  deleteAddress(addressId: string) {
    const params = new HttpParams().set('addressId', addressId);

    return this.http.delete(
      'http://localhost:3000/api/address/delete-address-by-address-id',
      {
        params,
      }
    );
  }

  getUserById(id: string | null) {
    return this.http.get(`http://localhost:3000/api/user/${id}`);
  }

  updateUser(id: string | null, payload: any) {
    return this.http.put(`http://localhost:3000/api/user/${id}`, payload);
  }

  getWishlist(userId: string | null) {}

  updateWishlist() {}
}
