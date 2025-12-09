import { Component, inject, input } from '@angular/core';
import { Product } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { FlowbiteInit } from '../../directives/flowbite-init';
import { Cart } from '../../../core/services/e-comm/cart/cart';
import { CurrencyPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  imports: [RouterLink, FlowbiteInit, CurrencyPipe, TranslatePipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  // cart service
  private cart = inject(Cart);

  cardProduct = input<Product>();

  addToCart(pID: string | undefined) {
    this.cart.addToCartApi(pID || '').subscribe({
      next: (resp: any) => {
        // console.log(resp.message);
      },
    });
  }
}
