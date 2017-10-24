import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClockContainerComponent} from "./clock-container/clock-container.component";
import {TimeCapsuleComponent} from "./time-capsule/time-capsule.component";
import {ShowTimeComponent} from "./show-time/show-time.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClockContainerComponent, TimeCapsuleComponent, ShowTimeComponent],
  exports: [ClockContainerComponent, TimeCapsuleComponent, ShowTimeComponent]
})
export class ClockModule {
}
