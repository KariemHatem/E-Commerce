import { Routes } from '@angular/router';
import { Cart } from './features/pages/cart/cart';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { NotFound } from './features/layout/not-found/not-found';
import { Home } from './features/pages/home/home';
import { authGuard } from './core/guard/auth/auth-guard';
import { ProudctDetails } from './features/pages/proudct-details/proudct-details';
import { Address } from './features/pages/address/address';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home', canActivate: [authGuard] },
  // Make Products Lazy Loading
  {
    path: 'products',
    loadComponent: () => import('./features/pages/products/products').then((m) => m.Products),
    title: 'Products',
    canActivate: [authGuard],
  },
  {
    path: 'productsdetails/:id',
    component: ProudctDetails,
    title: 'Products Details',
    canActivate: [authGuard],
  },
  { path: 'cart', component: Cart, title: 'Shopping Cart', canActivate: [authGuard] },
  // Make Categories Lazy Loading
  {
    path: 'categories',
    loadComponent: () => import('./features/pages/categories/categories').then((m) => m.Categories),
    title: 'Categories',
    canActivate: [authGuard],
  },
  { path: 'address/:cartId', component: Address, title: 'Address', canActivate: [authGuard] },
  { path: 'register', component: Register, title: 'Register' },
  { path: 'login', component: Login, title: 'Login' },
  { path: '**', component: NotFound, title: '404 - Not Found' },
];
