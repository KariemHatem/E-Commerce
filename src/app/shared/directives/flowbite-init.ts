import { AfterViewInit, Directive } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Directive({
  selector: '[appFlowbiteInit]',
})
export class FlowbiteInit implements AfterViewInit {
  ngAfterViewInit(): void {
    // Reinitialize Flowbite AFTER Angular renders the view
    setTimeout(() => initFlowbite(), 0);
  }
}
