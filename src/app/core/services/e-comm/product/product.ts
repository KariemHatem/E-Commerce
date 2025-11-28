import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  getAllProducts() {
    return this.http.get(`${environment.baseUrl}/api/v1/products`);
  }

  getSpecProducts(pId: string) {
    return this.http.get(`${environment.baseUrl}/api/v1/products/${pId}`);
  }
}
