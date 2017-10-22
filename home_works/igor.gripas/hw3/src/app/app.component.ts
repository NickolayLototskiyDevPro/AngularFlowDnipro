import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type='text' [(ngModel)]='text' />
    <h1>Morse pipe {{text | morse }}</h1>
    <h1>FilterNumber pipe {{numbers | filterNumbers : false }}</h1>
    <table tableColor [thEvenColor]="thEvenColor" [thOddColor]="thOddColor" [trEvenColor]="trEvenColor" [trOddColor]="trOddColor">
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
    <div switchOnOff>
      checkbox1<input type="checkbox" />
      checkbox2<input type="checkbox" />
      checkbox3<input type="checkbox" />
      checkbox4<input type="checkbox" />
      checkbox5<input type="checkbox"/>
    </div>
  `
})
export class AppComponent {
  public text: string;
  public thEvenColor: string = 'red';
  public thOddColor: string = 'green';
  public trEvenColor: string = 'yellow';
  public trOddColor: string = 'blue';

  public numbers: number[] = [1, 2, 3, 5, 6, 7, 12, 45, 56];
}
