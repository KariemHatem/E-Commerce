import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  private http = inject(HttpClient);

  // Check Out To Stripe
  checkOut(cartId: string, addressFormValue: object) {
    return this.http.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.ecommerceUrl}`,
      { shippingAddress: addressFormValue }
    );
  }
}
