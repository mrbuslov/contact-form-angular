import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-contact></app-contact>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-form';
}
