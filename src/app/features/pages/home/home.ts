import { ChangeDetectorRef, Component, inject, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../core/services/e-comm/product/product';
import { Card } from '../../../shared/omponents/card/card';
import { Product as interfaceProduct } from '../../../shared/interfaces/products';
import { HomeHeader } from './home-header/home-header';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [Card, HomeHeader, CurrencyPipe, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private products = inject(Product);
  // allProducts =======>  Signal Detection
  allProducts: WritableSignal<interfaceProduct[]> = signal<interfaceProduct[]>([]);

  subscribtion!: Subscription;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.getAllProductsHome();
  }

  getAllProductsHome() {
    this.subscribtion = this.products.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts.set(res);
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
