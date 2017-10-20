import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <h1>Directives</h1>
    <app-directive></app-directive>
    <hr />

    <h1>{{date | date : "MM:dd:yyyy hh:mm " }}</h1>
    <h2>{{formatedDate}}</h2>
    <h2>{{feelings | slice : 7}}</h2>
    <input type="number" [(ngModel)]="first" [max]="ingredients.length" min="0"/>
    <input type="number" [(ngModel)]="last" [max]="ingredients.length" [min]="first"/>
    <ul>
      <li *ngFor="let item of ingredients | slice : first : last">{{item}}</li>
    </ul>
    <pre>{{object | json }}</pre>
    <hr/>
    <input type="text" [(ngModel)]="password" />
    <h3>{{password | star : '-'}}</h3>
    <hr/>
    <input type="text" [(ngModel)]="pureText" />
    <h3>{{pureText | pure }}</h3>
    <h3>{{pureText | impure }}</h3>
  `
})
export class AppComponent {
  public ingredients: Array<string> = ['salt', 'sugar', 'powder', 'eggs', 'milk', 'fruits', 'mushrooms'];
  public date: Date = new Date();
  public formatedDate: string = new DatePipe('ru-RU').transform(this.date);
  public first: number = 0;
  public last: number = 2;

  public pureText: string;

  public password: string;
  public object = {
    name: 'Nick',
    age: 12,
    sex: 'M'
  };

  public feelings = 'I hate Angular';
}
