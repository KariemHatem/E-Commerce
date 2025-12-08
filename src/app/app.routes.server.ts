import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'productsdetails/:id', renderMode: RenderMode.Server },
  { path: 'address/:cartId', renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
