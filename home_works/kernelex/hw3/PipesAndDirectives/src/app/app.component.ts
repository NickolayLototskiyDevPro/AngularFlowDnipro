import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <input type="text" [(ngModel)]="toMorse">
    <h3>morse: {{toMorse | morse}}</h3>
    <hr>
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

  `,
  styles: [``]
})
export class AppComponent {
  title = 'HW3';
  toMorse = 'Start line';
  toEvenOrOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4];
}
