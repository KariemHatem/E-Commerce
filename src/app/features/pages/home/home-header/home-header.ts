import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-header',
  imports: [TranslatePipe],
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
})
export class HomeHeader {}
