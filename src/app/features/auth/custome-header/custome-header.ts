import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custome-header',
  imports: [],
  templateUrl: './custome-header.html',
  styleUrl: './custome-header.scss',
})
export class CustomeHeader {
  customeHeading = input.required<string>();
  customeParagraph = input<string>();
}
