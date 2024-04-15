import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
