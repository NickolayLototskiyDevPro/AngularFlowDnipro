import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" [(ngModel)]="inputValue"/>
  <br/>
  <h4> Morse: {{inputValue | morse}}</h4>
  <hr/>
  <h4> Even: {{sourceArray | even}}</h4>
  <h4> Odd: {{sourceArray | even:false}}</h4>
  `,
  styles: ['']
})
export class AppComponent implements OnInit {

  public sourceArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  public ngOnInit(): void {

  }
}
