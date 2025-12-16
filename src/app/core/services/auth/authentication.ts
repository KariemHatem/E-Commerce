import { Platform } from '../platform/platform';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  userDtata: BehaviorSubject<any> = new BehaviorSubject(null);
  private platform = inject(Platform);

  // private baseUrl = environment.baseUrl;

  constructor() {
    if (this.platform.isBrowser()) {
      this.saveData();
    }
  }

  httpCall = inject(HttpClient);
  // Send Register Data to API
  registerData(data: object) {
    return this.httpCall.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }
  // Send Login Data to API
  loginData(data: object) {
    return this.httpCall.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }
  // Decode User Data from Token
  saveData() {
    const token = localStorage.getItem('userToken');
    if (token) {
        const decoded = jwtDecode(token);
        this.userDtata.next(decoded);
    } else {
      this.userDtata.next(null);
    }
  }

  // Control Acces With Guard
  isLoggedIn(): boolean {
    const token = localStorage.getItem('userToken');
    return token != null && token.trim().length > 0;
  }
}
