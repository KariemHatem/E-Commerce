import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './features/layout/footer/footer';
import { Navbar } from './features/layout/navbar/navbar';
import { FlowbiteLoader } from './core/services/flowbite/flowbite-loader';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, NgxSpinnerComponent, NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('E-commerce');

  private flowbite = inject(FlowbiteLoader);

  ngOnInit() {
    this.flowbite.load();
  }
}
