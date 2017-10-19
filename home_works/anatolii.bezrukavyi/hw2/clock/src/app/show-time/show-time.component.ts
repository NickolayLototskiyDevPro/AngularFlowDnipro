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

  rememberTimeEmit(): void {
      this.rememberTime.emit();
  }

}
