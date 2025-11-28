import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product } from '../../../core/services/e-comm/product/product';
import { Card } from '../../../shared/omponents/card/card';
import { Product as interfaceProduct } from '../../../shared/interfaces/products';
import { HomeHeader } from './home-header/home-header';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Card, HomeHeader, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
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
      next: (res: any) => {
        this.allProducts = res.data;
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
