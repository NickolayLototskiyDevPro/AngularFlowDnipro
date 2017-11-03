import { NgModule } from '@angular/core';
import { TimeCapsuleComponent } from './components/time-capsule/time-capsule.component';
import { TimeCapsuleService } from './services/time-capsule.service';
import { ClockModule } from '../clock/clock.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ClockModule,
        CommonModule
    ],
    exports: [
        TimeCapsuleComponent
    ],
    declarations: [
        TimeCapsuleComponent
    ],
    providers: [
        TimeCapsuleService
    ],
})
export class TimeCapsuleModule { }
