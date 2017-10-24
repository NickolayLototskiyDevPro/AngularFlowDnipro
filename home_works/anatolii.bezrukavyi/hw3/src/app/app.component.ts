import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public testString = 'Good night, sleep tight, I wish you lovely dreams with all my might';
  public testArray: number[] = Array.from(Array(10).keys());
  public thEvenColor = 'red';
  public thOddColor = 'green';
  public trEvenColor = 'yellow';
  public trOddColor = 'blue';
}
