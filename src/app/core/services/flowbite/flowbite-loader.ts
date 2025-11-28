import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteLoader {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  load() {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite');
    }
  }
}
