import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {
  }

  public sourceArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  private thColorOdd: string = '#9c9c9c';
  private thColorEven: string = '#e2e2e2';
  private trColorOdd: string = '#9dc2c5';
  private trColorEven: string = '#e7fdff';
  private radioValues: Array<string> = ['Check1', 'Check2', 'Check3', 'Check4'];
  private selectedRadio1: string;
  private selectedRadio2: string;
  private selectedRadioInput: string;

  onRadioSelectionChanged1(e: string): void {
    this.selectedRadio1 = e;
  }

  onRadioSelectionChanged2(e: string): void {
    this.selectedRadio2 = this.selectedRadioInput = e;
    this.cdr.detectChanges();
  }
}
