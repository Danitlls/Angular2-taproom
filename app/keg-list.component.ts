import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
// import { styles } from './styles.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onEmptinessChange($event.target.value)">
    <option value="allKegs" selected="selected">ALL KEGS</option>
    <option value="kegsToReorder">KEGS TO REORDER</option>
  </select>


  <ul>
    <li [class]="isAlmostEmpty(currentKeg)"
    (click)="isAlmostEmpty(currentKeg)"
    *ngFor="let currentKeg of childKegList | emptiness:filterByEmptiness">
    <span [class]="strong(currentKeg)"><h3>{{currentKeg.name}} by {{currentKeg.brand}}</h3> Style: {{currentKeg.style}}<br> {{currentKeg.alcoholContent}}<br><span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span><br> Pints Left: {{currentKeg.pints}}</span><span class="bttn"><button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button> <button (click)="sellPint(currentKeg)">Sold a Pint</button> <button (click)="sellSmallGrowler(currentKeg)">Sold a Small Growler</button> <button (click)="sellLargeGrowler(currentKeg)">Sold a Large Growler</button></span></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "allKegs";

  onEmptinessChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

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
