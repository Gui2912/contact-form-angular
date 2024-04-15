import { ErrorMessageComponent } from './../../error-message/error-message.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldBoxComponent } from '../../field-box/field-box.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    FieldBoxComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    area: new FormControl('', [Validators.required]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  get errors() {
    return {
      name: this.contactForm.get('name')?.errors,
      email: this.contactForm.get('email')?.errors,
      phone: this.contactForm.get('phone')?.errors,
      area: this.contactForm.get('area')?.errors,
      message: this.contactForm.get('message')?.errors,
    };
  }

  submit() {
    if (this.contactForm.status === 'VALID') {
      console.log(this.contactForm.value);
      this.contactForm.reset({ area: '' });
    } else {
      console.log('Preencha o formulário corretamente');
    }
  }
}
