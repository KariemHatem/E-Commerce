import { Component, inject } from '@angular/core';
import { Product } from '../../../core/services/e-comm/product/product';
import { Product as interfaceProduct } from '../../../shared/interfaces/products';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../shared/pipes/search/search-pipe';
import { Card } from '../../../shared/omponents/card/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [Card, SearchPipe, FormsModule, TranslatePipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private products = inject(Product);
  // allProducts
  allProducts: interfaceProduct[] = [];

  // Search
  searchWord: string = '';

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
