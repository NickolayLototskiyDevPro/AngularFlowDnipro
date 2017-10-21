import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { TestService } from './test.service';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{counter}}</h1>
  <h1>{{counter2}}</h1>
  <h1>{{service}}</h1>

  <hr />
  <app-car></app-car>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  public counter: number;
  public counter2: number;
  public service: string;

  constructor(
    private _testService: TestService,
    @Inject('Second') private _testService2: TestService,
    private _simpleService: SimpleService) {
  }

  public ngOnInit(): void {
    this.service = this._simpleService.value;

    this._testService.Counter.subscribe((data) => {
      this.counter = data;
    });

    this._testService2.Counter.subscribe((data) => {
      this.counter2 = data;
    });
  }

  public ngOnDestroy(): void {
    this._testService.Counter.unsubscribe();
    this._testService2.Counter.unsubscribe();
  }
}


