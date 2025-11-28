import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/services/e-comm/product/product';
import { Product as pInterface } from '../../../shared/interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proudct-details',
  imports: [CurrencyPipe],
  templateUrl: './proudct-details.html',
  styleUrl: './proudct-details.scss',
})
export class ProudctDetails {
  private activatedRoute = inject(ActivatedRoute);
  private product = inject(Product);
  private cdr = inject(ChangeDetectorRef);
  specifecProduct!: pInterface;
  subscribtion!: Subscription;
  pId: string = '';

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.pId = param.get('id') || '';
      this.subscribtion = this.product.getSpecProducts(this.pId).subscribe({
        next: (resp: any) => {
          this.specifecProduct = resp.data;
          this.cdr.detectChanges();
          console.log(this.specifecProduct);
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
