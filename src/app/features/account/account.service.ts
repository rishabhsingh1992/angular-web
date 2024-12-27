import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userId: string | null = localStorage.getItem('userId');
  // userId: string | null = "674ea6af349791add68cd765";
  userIdObj = { userId: this.userId };

  constructor(private http: HttpClient) {}

  getAddressesByUserId() {
    const params = this.userId
      ? new HttpParams().set('userId', this.userId)
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
    return this.http.post(`http://localhost:3000/api/address`, {
      ...this.userIdObj,
      payload,
    });
  }

  updateAddress(addressId: string | null, payload: any) {
    return this.http.put(
      `http://localhost:3000/api/address/update-address-by-address-id`,
      {
        addressId,
        ...this.userIdObj,
        payload,
      }
    );
  }

  deleteAddress(id: string) {
    return this.http.delete(`http://localhost:3000/api/address/${id}`);
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
