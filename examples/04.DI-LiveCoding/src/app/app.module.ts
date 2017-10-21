import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { TestService } from './test.service';
import { AppComponent } from './app.component';
import { SimpleService } from './simple.service';
import { FakeSimpleService } from './fake.simple.service';
import { NewModule } from './new_module/new.module';

const ENV: InjectionToken<boolean> = new InjectionToken<boolean>('ENV');
function factory(ENV_F): SimpleService {
  return ENV_F === 'prod' ? new SimpleService() : new FakeSimpleService();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NewModule
  ],
  providers: [
    { provide: ENV, useValue: 'prod' },
    { provide: TestService, useClass: TestService },
    { provide: 'Second', useClass: TestService },
    { provide: SimpleService, useFactory: factory, deps: [ENV] }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
