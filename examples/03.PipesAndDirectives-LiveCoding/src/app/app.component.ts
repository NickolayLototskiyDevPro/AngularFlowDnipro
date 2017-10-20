import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <h1>Date: {{dateTime | date}}</h1>
    <h1>Piping date {{pipingDate}} </h1>
    <h1>{{obj | json}}</h1>
    <hr />
    <input type='text' [(ngModel)]='password' />
    <h1>{{password | custom : '+'}}</h1>
    <h2>{{password | pure }}</h2>
    <h2>{{password | impure}}</h2>
    <hr />
    <ul>
      <li appColor [color]="password" *ngFor="let hero of heroes">{{hero.name}} - {{hero.age}}</li>
    </ul>
  `
})
export class AppComponent implements OnInit {

  public heroes = [
    {name: 'Nick', age: 37},
    {name: 'Alex', age: 45},
    {name: 'Max', age: 22},
    {name: 'Bill', age: 32},
    {name: 'Mary', age: 18}
  ];

  public itemColor = 'red';

  constructor() {

  }

  public dateTime: Date;
  public pipingDate: string;
  public password: string;
  public obj = {
    value: 'val',
    num: 123
  };

  public ngOnInit(): void {
    this.dateTime = new Date();
    this.pipingDate = new DatePipe('ru-RU').transform(new Date());
  }
}
