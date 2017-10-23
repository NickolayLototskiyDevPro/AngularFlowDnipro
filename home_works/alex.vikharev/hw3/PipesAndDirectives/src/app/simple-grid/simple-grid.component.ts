///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-grid',
  template: `
    <h2>Why it DOES NOT work here???</h2>
    <table  gridColors thEvenColor="red" thOddColor="blue" trEvenColor="gray" trOddColor="lightgray">
      <thead>
      <tr >
        <th  *ngFor="let header of headers"> {{header}}</th>
        <!-- <span [innerHTML]="column.name"></span>-->
      </tr>
      </thead>
      <tbody>
      <tr  *ngFor="let item of items">
        <td  *ngFor="let field of item">{{field}}</td>
      </tr>
      </tbody>
    </table>
    <br>

    <h2>Why it works here???</h2>
    <table gridColors thEvenColor="red" thOddColor="blue" trEvenColor="gray" trOddColor="lightgray">
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <tr>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
      </tr>
      <tr>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
      </tr>
      <tr>
        <td>31</td>
        <td>32</td>
        <td>33</td>
        <td>34</td>
      </tr>
      <tr>
        <td>41</td>
        <td>42</td>
        <td>43</td>
        <td>44</td>
      </tr>

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
export class SimpleGridComponent implements OnInit {
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
