import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Cart as pCart } from '../../../core/services/e-comm/cart/cart';
import { CartProudct } from '../../../shared/interfaces/cart-proudct';
import { FlowbiteInit } from '../../../shared/directives/flowbite-init';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [FlowbiteInit, RouterLink, CurrencyPipe, TranslatePipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  // Cart Service
  private cart = inject(pCart);
  // Cart Holder
  cartData: CartProudct[] = [];
  // Cart Total Price
  totalPrice: number = 0;
  subscribtion!: Subscription;
  cartId: string = '';
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.getCart();
  }

  // Get User Cart
  getCart() {
    this.subscribtion = this.cart.getUserCartApi().subscribe({
      next: (resp: any) => {
        this.cartData = resp.data.products;
        this.totalPrice = resp.data.totalCartPrice;
        this.cartId = resp.cartId;
        this.cdr.detectChanges();

        if ((window as any).Flowbite) {
          (window as any).Flowbite.init();
        }
        // console.log(resp.data.products);
      },
    });
  }
  // Remove Cart Items
  removeCartItems(pId: string) {
    this.subscribtion = this.cart.deleteUserCartApi(pId).subscribe({
      next: (res: any) => {
        if (res.status == 'success') {
          this.getCart();
        }
        this.cdr.detectChanges();

        if ((window as any).Flowbite) {
          (window as any).Flowbite.init();
        }
      },
    });
  }
  //  Change Cart Count
  changeCount(pId: string, pCount: number) {
    if (pCount <= 0) {
      this.removeCartItems(pId);
      return;
    }
    this.subscribtion = this.cart.updateCartApi(pId, pCount).subscribe({
      next: (res: any) => {
        if (res.status == 'success') {
          this.getCart();
        }
      },
    });
  }
  //Remove Cart
  clearCart() {
    this.subscribtion = this.cart.clearUserCartApi().subscribe({
      next: () => {
        this.getCart();
      },
    });
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
