import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // SZ please move template to separate file
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <h3>Implements pipe for translate alphabetical symbols to morse alphabet.</h3>
    <input type="text" [(ngModel)]="toMorse">
    <h3>morse: {{toMorse | morse}}</h3>
    <hr>
    <h3>Implements pipe for filtering numbers. If you path true(default) pass even numbers from array only. If you path false odd.</h3>
    <p>Array: {{toEvenOrOdd}}</p>
    <p>Even: {{toEvenOrOdd | even}}</p>
    <p>Odd: {{toEvenOrOdd | even:false}}</p>
    <p>Even: {{toEvenOrOdd | even:true}}</p>
    <hr>
    <h3>mouseOver test</h3>
    <app-colored-grid></app-colored-grid>
    <hr>
    <h3>Colored table directive (1st - th(odd color), 2nd - th(even color), 3rd - tr(odd color), 4th - tr(even color))</h3>
    <app-simple-grid></app-simple-grid>
    <hr>
    <h3>- Implement switch off/on button directive for checkbox container</h3>
    <div asRadioButton>
      <input type="checkbox">
      <input type="checkbox">
      <input type="checkbox">
      <input type="checkbox">
      <input type="checkbox">
    </div>

  `,
  styles: [``]
})
export class AppComponent {
  title = 'HW3';
  toMorse = 'Start line';
  toEvenOrOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4];
}
