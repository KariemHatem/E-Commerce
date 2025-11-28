import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private http = inject(HttpClient);

  // Add To Cart Api
  addToCartApi(pId: string) {
    return this.http.post(`${environment.baseUrl}/api/v1/cart`, { productId: pId });
  }
  // Update Cart Api
  updateCartApi(pId: string, pCount: number) {
    return this.http.put(`${environment.baseUrl}/api/v1/cart/${pId}`, { count: pCount });
  }
  // Get User Cart
  getUserCartApi() {
    return this.http.get(`${environment.baseUrl}/api/v1/cart`);
  }
  // Delete User Cart
  deleteUserCartApi(pId: string) {
    return this.http.delete(`${environment.baseUrl}/api/v1/cart/${pId}`);
  }
  // Clear User Cart
  clearUserCartApi() {
    return this.http.delete(`${environment.baseUrl}/api/v1/cart`);
  }
}
