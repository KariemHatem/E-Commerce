import { Component, inject } from '@angular/core';
import { CustomeHeader } from '../custome-header/custome-header';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../../../core/services/auth/authentication';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [CustomeHeader, ReactiveFormsModule, TranslatePipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  // Services
  private authentication = inject(Authentication);

  private router = inject(Router);

  errorMessage: string = '';

  isLoading: boolean = false;

  // Custome Header Data
  loginHeadiing: string = 'Login to Your Account';
  loginParagraph: string = ' Welcome back! Enter your details to access your FreshCart account.';

  //Form Handeler
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%?])[A-Za-z0-9!@#$%?]{6,10}$/
      ),
    ]),
  });

  loginSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authentication.loginData(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res.message === 'success') {
            // Save token in Local Storage On refresh
            localStorage.setItem('userToken', res.token);
            // Decode User Data from Token
            this.authentication.saveData();
            // Navigate to Home Page
            this.router.navigateByUrl('/home');
          }
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          console.log(err);
          this.isLoading = false;
        },
      });
    }
  }
}
