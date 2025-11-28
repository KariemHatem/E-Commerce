import { Component, inject } from '@angular/core';
import { CustomeHeader } from '../custome-header/custome-header';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Authentication } from '../../../core/services/auth/authentication';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CustomeHeader, TranslatePipe],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  // Services
  private authentication = inject(Authentication);

  private router = inject(Router);

  errorMessage: string = '';

  isLoading: boolean = false;

  // Custome Header Data
  registerHeading: string = 'Create Your Account';
  registerParagraph: string = 'Join FreshCart and start shopping smarter.';

  //Form Handeler
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%?])[A-Za-z0-9!@#$%?]{6,10}$/
        ),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%?])[A-Za-z0-9!@#$%?]{6,10}$/
        ),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
      ]),
    },
    this.matchedPassword
  );

  // Custome Validation For Password Match
  matchedPassword(control: AbstractControl) {
    if (control.get('password')?.value === control.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatched: true };
    }
  }

  // Form Submit Handeler
  registerSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authentication.registerData(this.registerForm.value).subscribe({
        next: (res: any) => {
          if (res.message === 'success') {
            this.router.parseUrl('/login');
          }

          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
