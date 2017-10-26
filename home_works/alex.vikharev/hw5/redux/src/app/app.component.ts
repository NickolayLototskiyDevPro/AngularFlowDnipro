import {Component, OnInit} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {IAppState} from "./model/store";
import {Observable} from "rxjs/Observable";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}} !
      </h1>
      <p style="text-align: left">
        Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)<br/>
        Given counter - After starting application it disabled. After two seconds after app start it enabled to
        increase/decrease<br/>
        Counter decrease/increase appear to counter after 1 second delay.<br/>
        Use redux components architecture.<br/>
        Enjoy!<br/>
      </p>
      
      <div [class.disabled]="!(isActive$ | async)">
        <app-decrement></app-decrement>
        <app-counter></app-counter>
        <app-increment></app-increment>
      </div>

    </div>
  `,
  styles: [
      `
      .disabled {
        pointer-events: none;
        opacity: 0.4;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'Homework 5';
  public isActive$: Observable<boolean>;


  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterService.start();
    this.isActive$ = this.counterService.isActive$; //this.ngRedux.select(appState => appState.isActive);
  }


}
