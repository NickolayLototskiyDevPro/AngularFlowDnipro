import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <increment></increment>
    <decrement></decrement>
    <counter></counter>
  `
})
export class AppComponent {
  title = 'app';
}
