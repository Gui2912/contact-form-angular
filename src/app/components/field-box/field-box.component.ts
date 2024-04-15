import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-box',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: './field-box.component.html',
  styleUrl: './field-box.component.scss',
})
export class FieldBoxComponent {
  @Input() error!: ValidationErrors | undefined | null;

  get isInvalid() {
    return this.error ? 'field-box error' : 'field-box';
  }
}
