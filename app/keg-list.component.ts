import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
// import { styles } from './styles.model';

@Component({
  selector: 'keg-list',
  template: `

  <select (change)="onStyleChange($event.target.value)">
    <option value="allStyles" selected="selected">
  All Styles</option>
    <option *ngFor="let style of styles" value="{{style.value}}">
    {{style.display}}</option>
  </select>

  <ul>
    <li [class]="isAlmostEmpty(currentKeg)"
    (click)="isAlmostEmpty(currentKeg)"
    *ngFor="let currentKeg of childKegList | beerStyles:filterByStyle">
    <span [class]="strong(currentKeg)">{{currentKeg.name}} by {{currentKeg.brand}}<br> Style: {{currentKeg.style}}<br> {{currentKeg.alcoholContent}}<br><span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span><br> Pints Left: {{currentKeg.pints}}</span> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Price</button> <button (click)="sellPint(currentKeg)">Sold a Pint</button> <button (click)="sellSmallGrowler(currentKeg)">Sold a Small Growler</button> <button (click)="sellLargeGrowler(currentKeg)">Sold a Large Growler</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  styles = [
    { value: 'Amber Ale', display: 'Amber Ale'},
    { value: 'Barleywine', display: 'Barleywine'},
    { value: 'Brown', display: 'Brown'},
    { value: 'Cider', display: 'Cider'},
    { value: 'Double IPA', display: 'Double IPA'},
    { value: 'Hefeweizen', display: 'Hefeweizen'},
    { value: 'IPA', display: 'IPA'},
    { value: 'Lager', display: 'Lager'},
    { value: 'Pale Ale', display: 'Pale Ale'},
    { value: 'Porter', display: 'Porter'},
    { value: 'Pilsner', display: 'Pilsner'},
    { value: 'Red Ale', display: 'Red Ale'},
    { value: 'Saison', display: 'Saison'},
    { value: 'Sour Ale', display: 'Sour Ale'},
    { value: 'Stout', display: 'Stout'},
    { value: 'Wheat', display: 'Wheat'},
    { value: 'Witbier', display: 'Witbier'}
  ];

  // filterByEmptiness: string = "allKegs";
  filterByStyle: string = "allStyles";

  // onEmptinessChange(optionFromMenu) {
  //   this.filterByEmptiness = optionFromMenu;
  // }

  onStyleChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
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

// <select (change)="onEmptinessChange($event.target.value)">
//   <option value="allKegs" selected="selected">ALL KEGS</option>
//   <option value="kegsToReorder">KEGS TO REORDER</option>
// </select>

// emptiness:filterByEmptiness
