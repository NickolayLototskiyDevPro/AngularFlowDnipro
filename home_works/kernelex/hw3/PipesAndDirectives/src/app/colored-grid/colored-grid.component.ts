import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-colored-grid',
  template: `
    <table itemHighlight="lightblue">
      <thead>
      <tr itemHighlight="grey">
        <th  *ngFor="let header of headers"> {{header}}</th>
        <!-- <span [innerHTML]="column.name"></span>-->
      </tr>
      </thead>
      <tbody>
      <tr itemHighlight *ngFor="let item of items">
        <td itemHighlight="yellow"  *ngFor="let field of item">{{field}}</td>
      </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table, th, td {
      padding: 5px;
      border: 1px solid black;
      border-collapse: collapse;
    }
    /*th {
      text-align: right;
    }
    table tr:nth-child(even) {
      background-color: #eee;
    }
    table tr:nth-child(odd) {
      background-color: #fff;
    }
    table th {
      color: white;
      background-color: black;
    }*/
  `]
})
export class ColoredGridComponent implements OnInit {
  public headers = ['name', 'age', 'test', 'gender'];
  public item = ['name', '32', 'ok'];
  public items = [
    ["Alex", '32', 'ok', 'm'],
    ["Nik", '54', '123', 'm'],
    ["Ted", '22', '321', 'f']
  ];

  constructor() {
  }

  ngOnInit() {
  }

}