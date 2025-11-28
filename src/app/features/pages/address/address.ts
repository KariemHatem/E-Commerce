import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomeHeader } from '../../auth/custome-header/custome-header';
import { Orders } from '../../../core/services/e-comm/all-Orders/orders';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, CustomeHeader, TranslatePipe],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class Address {
  addressHeadinig: string = 'Fill Your Address Here';

  private orders = inject(Orders);

  cartId: string = '';

  private activatedRoute = inject(ActivatedRoute);

  addressForm: FormGroup = new FormGroup({
    details: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(200),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
    ]),
    city: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,30}$/)]),
  });

  addressSubmit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.cartId = param.get('cartId')!;
      this.orders.checkOut(this.cartId, this.addressForm.value).subscribe({
        next: (res: any) => {
          window.location.href = res.session.url;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
