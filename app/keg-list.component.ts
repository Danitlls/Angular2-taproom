import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="isAlmostEmpty(currentKeg)"
    (click)="isAlmostEmpty(currentKeg)"
    *ngFor="let currentKeg of childKegList">
    <span [class]="strong(currentKeg)">{{currentKeg.name}} by {{currentKeg.brand}}, Style: {{currentKeg.style}}, {{currentKeg.alcoholContent}}%, <span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span>, Pints Left: {{currentKeg.pints}}</span> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Price</button> <button (click)="sellPint(currentKeg)">Sold a Pint</button> <button (click)="sellSmallGrowler(currentKeg)">Sold a Small Growler</button> <button (click)="sellLargeGrowler(currentKeg)">Sold a Large Growler</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();


  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priceColor(currentKeg){
    if (currentKeg.price >= 8){
      return "bg-danger";
    } else if (currentKeg.price >= 6) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  strong(currentKeg){
    if(currentKeg.alcoholContent >= 6.5){
      return "strong";
    }
  }

  sellPint(clickedKeg: Keg){
    clickedKeg.pints -= 1;
  }

  sellSmallGrowler(clickedKeg: Keg){
    clickedKeg.pints -= 2;
  }

  sellLargeGrowler(clickedKeg: Keg){
    clickedKeg.pints -= 4;
  }

  isAlmostEmpty(clickedKeg: Keg) {
    if(clickedKeg.pints <= 10) {
      return "bg-danger";
    }
  }
}
