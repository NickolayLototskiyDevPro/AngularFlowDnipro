import { ShowTimeComponent } from './components/show-time/show-time.component';
import { NgModule } from '@angular/core';
import { ClockService } from './services/clock.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ShowTimeComponent
    ],
    declarations: [
        ShowTimeComponent
    ],
    providers: [
        ClockService
    ],
})
export class ClockModule { }
