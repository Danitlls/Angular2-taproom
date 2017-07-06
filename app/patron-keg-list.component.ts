import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
// import { styles } from './styles.model';

@Component({
  selector: 'patron-keg-list',
  template: `
  <div *ngIf="showHappy">
    <button id="show-happy" (click)="happyHour()">VIEW HAPPY HOUR MENU</button>
    <br>
    <h4>REGULAR MENU</h4>
  </div>
  <div *ngIf="showRegular">
    <button id="show-not-happy" (click)="regularHour()">VIEW REGULAR MENU</button>
    <br>
    <h4>HAPPY HOUR MENU</h4>
  </div>
  <br>
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
      <span [class]="strong(currentKeg)">{{currentKeg.name}} by {{currentKeg.brand}}<br> Style: {{currentKeg.style}}<br> {{currentKeg.alcoholContent}}<br><span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span><br> Pints Left: {{currentKeg.pints}}</span></li>
    </ul>
    <hr>
  `
})

export class PatronKegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  showHappy: boolean = true;
  showRegular: boolean = false;

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

  filterByStyle: string = "allStyles";

  onStyleChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
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

  isAlmostEmpty(clickedKeg: Keg) {
    if(clickedKeg.pints <= 10) {
      return "bg-danger";
    }
  }

  happyHour(currentKeg) {
    this.showHappy = false;
    this.showRegular = true;
    for (var keg in this.childKegList) {
      this.childKegList[keg].price -= 1;
    }
  }

  regularHour(kegs) {
    this.showHappy = true;
    this.showRegular = false;
    for (var keg in this.childKegList) {
      this.childKegList[keg].price += 1;
    }
  }

}
