import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/services/e-comm/product/product';
import { Product as pInterface } from '../../../shared/interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-proudct-details',
  imports: [CurrencyPipe, TranslatePipe],
  templateUrl: './proudct-details.html',
  styleUrl: './proudct-details.scss',
})
export class ProudctDetails {
  private activatedRoute = inject(ActivatedRoute);
  private product = inject(Product);
  private cdr = inject(ChangeDetectorRef);
  specifecProduct = signal<pInterface | null>(null);
  subscribtion!: Subscription;
  pId: string = '';

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.pId = param.get('id') || '';
      this.subscribtion = this.product.getSpecProducts(this.pId).subscribe({
        next: (resp: any) => {
          this.specifecProduct.set(resp.data);
          this.cdr.detectChanges();
          if ((window as any).Flowbite) {
            (window as any).Flowbite.init();
          }
        },
      });
    });
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
