import { Component, inject } from '@angular/core';
import { Product } from '../../../core/services/e-comm/product/product';
import { Product as interfaceProduct } from '../../../shared/interfaces/products';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsInfo } from '../../../shared/omponents/productsInfo/products-info/products-info';

@Component({
  selector: 'app-categories',
  imports: [ProductsInfo],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  private products = inject(Product);
  // allProducts
  allProducts: interfaceProduct[] = [];

  subscribtion!: Subscription;
  private cdr = inject(ChangeDetectorRef);
  ngOnInit() {
    this.getAllProductsHome();
  }

  getAllProductsHome() {
    this.subscribtion = this.products.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts = res;
        this.cdr.detectChanges();
        if ((window as any).Flowbite) {
          (window as any).Flowbite.init();
        }
      },
    });
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
