import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarComponent } from './car.component';
import { EngineComponent } from './engine.component';


@NgModule({
    declarations: [ CarComponent, EngineComponent ],
    imports: [ CommonModule ],
    providers: [],
    exports: [ CarComponent ]
})
export class NewModule {

}
