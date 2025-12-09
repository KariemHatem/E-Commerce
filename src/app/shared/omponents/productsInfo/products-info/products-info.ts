import { TranslatePipe } from '@ngx-translate/core';
import { Product } from './../../../interfaces/products';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-products-info',
  imports: [TranslatePipe],
  templateUrl: './products-info.html',
  styleUrl: './products-info.scss',
})
export class ProductsInfo {
  cardProductInfo = input<Product>();
}
