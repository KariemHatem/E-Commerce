import { Component, inject } from '@angular/core';
import { Translation } from '../../../../core/services/translate/translation';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-dropdown',
  imports: [TranslatePipe],
  templateUrl: './lang-dropdown.html',
  styleUrl: './lang-dropdown.scss',
})
export class LangDropdown {
  private translationService = inject(Translation);
  changeLang(lang: string) {
    this.translationService.changeLang(lang);
  }
}
