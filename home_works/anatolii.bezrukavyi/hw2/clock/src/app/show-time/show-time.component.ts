import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html'
})
export class ShowTimeComponent {

  @Input()
  public visibleTime: number;
  @Input()
  public temporaryTime: number = 0;

  @Output()
  public rememberTime: EventEmitter<void> = new EventEmitter<void>();

  // SZ missed access modifier
  // SZ please install tslint and setup member-access rule
  // SZ in general your homework looks good
  rememberTimeEmit(): void {
      this.rememberTime.emit();
  }

}
