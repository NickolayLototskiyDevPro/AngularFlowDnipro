import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='wrapper'>
  <div class='clock-container'>
  <div><h4>Clock container</h4></div>
  <app-show-time></app-show-time>
  </div>
    <app-time-capsule></app-time-capsule>
  </div>`,
  styles: [
    `.wrapper { display: flex;}`,
    '.clock-container { background-color: #1098d0; color: white; width: 300px; display:flex; flex-flow:column; text-align: center;}',
  ]
})
export class AppComponent {

}
