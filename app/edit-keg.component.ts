import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div id="updateForm" *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Edit brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Edit Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <label>Edit Pints Left in Keg:</label>
      <input [(ngModel)]="childSelectedKeg.pints">

      <label>Edit price/pint:</label>
      <input [(ngModel)]="childSelectedKeg.price">

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
