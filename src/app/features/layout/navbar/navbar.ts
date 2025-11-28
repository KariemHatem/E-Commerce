import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Authentication } from '../../../core/services/auth/authentication';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LangDropdown } from '../../../shared/omponents/langauge-dropdown/lang-dropdown/lang-dropdown';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LangDropdown],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isLogin: boolean = false;

  private router = inject(Router);

  private authentication = inject(Authentication);

  ngOnInit() {
    this.authentication.userDtata.subscribe(() => {
      if (this.authentication.userDtata.getValue() == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login');
    this.authentication.userDtata.next(null);
  }
}
