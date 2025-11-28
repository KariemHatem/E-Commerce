import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  email: string = '';

  onSubmit(form: NgForm) {
    const formRef = form;
    formRef.valid; // restrict sending form if not valid
    form.resetForm();
    this.email = '';
  }
}
