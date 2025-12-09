import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  private products$!: Observable<any>;

  getAllProducts() {
    if (!this.products$) {
      this.products$ = this.http.get<any>(`${environment.baseUrl}/api/v1/products`).pipe(
        map((response) =>
          response.data.map((product: any) => ({
            _id: product._id,
            title: product.title,
            price: product.price,
            imageCover: product.imageCover,
            category: product.category,
            ratingsAverage: product.ratingsAverage,
          }))
        ),
        shareReplay(1)
      );
    }
    return this.products$;
  }

  getSpecProducts(pId: string) {
    return this.http.get(`${environment.baseUrl}/api/v1/products/${pId}`);
  }
}
