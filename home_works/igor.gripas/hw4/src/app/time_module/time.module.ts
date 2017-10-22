import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeCapsuleService } from './time.capsule.service';
import { TimeService } from './time.service';
import { DateTimeService } from './date.time.service';
import { NumberTimeService } from './number.time.service';
import { TimeCapsuleComponent } from './time.capsule.component';
import { ShowTimeComponent } from './showtime.component'

export function factory(TYPE_F): TimeService {
  return TYPE_F === 'time' ? new DateTimeService() : new NumberTimeService();
}

@NgModule({
  declarations: [
    TimeCapsuleComponent,
    ShowTimeComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: 'TYPE', useValue: 'time' },
    { provide: TimeCapsuleService, useClass: TimeCapsuleService},
    { provide: TimeService, useFactory: factory, deps: ['TYPE'] }
  ],
  exports: [TimeCapsuleComponent, ShowTimeComponent],
})
export class TimeModule { }
