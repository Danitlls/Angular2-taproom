import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <h3>Currently on tap:</h3>
    <ul>
      <li [class]="isAlmostEmpty(currentKeg)" (click)="isAlmostEmpty(currentKeg)" *ngFor="let currentKeg of kegs"><span [class]="strong(currentKeg)">{{currentKeg.name}} by {{currentKeg.brand}}, Style: {{currentKeg.style}}, {{currentKeg.alcoholContent}}%, <span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span>, Pints Left: {{currentKeg.pints}}</span> <button (click)="editKeg(currentKeg)">Edit Price</button> <button (click)="sellPint(currentKeg)">Sold a Pint</button> <button (click)="sellSmallGrowler(currentKeg)">Sold a Small Growler</button> <button (click)="sellLargeGrowler(currentKeg)">Sold a Large Growler</button></li>
    </ul>
    <!-- <button (click)="sortByStyle(kegs)">Sort</button> -->
    <hr>
    <div>
      <label><h3>Edit {{selectedKeg.name}}'s Price/pint:</h3></label>
      <input [(ngModel)]="selectedKeg.price">
    </div>
    <div>
      <h3>Add a New Keg</h3>
      <label>Name:</label>
      <input #newName>
      <br>
      <label>Brand:</label>
      <input #newBrand>
      <br>
      <label>Price:</label>
      <input #newPrice>
      <br>
      <label>Alcohol Content:</label>
      <input #newAlcoholContent>
      <br>
      <label>Style:</label>
      <select>
        <option *ngFor="let style of styles" value="styles.value"  #newStyle>
        {{style.display}}</option>
      </select>
      <br>
      <button (click)="addKeg(newName.value, newBrand.value, newStyle.value, newPrice.value, newAlcoholContent.value)">Submit</button>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Chocolate Hazelnut Porter', 'Heretic', 'Porter', 6, 7.0),
    new Keg('Herbs of a Feather', 'Coalition', 'Sour Ale', 6, 5.5),
    new Keg('Spruce Saison', 'Propolis', 'Saison', 8, 7.5),
    new Keg('Brett IPA', 'pFriem', 'IPA', 6, 6.6),
    new Keg('Rocketman Red', 'Rocketman Red', 'Red Ale', 5, 5.5),
    new Keg('Porter', 'Anchor', 'Porter', 5, 5.6),
    new Keg('Dry-Hopped Barleywine', 'Sierra Nevada/Avery', 'Barleywine', 7, 9.4),
    new Keg('Hoppy A-Hefe', 'StormBreaker', 'Hefeweizen', 6, 5.0),
    new Keg('Swami’s IPA', 'Pizza Port', 'IPA', 6, 6.8)  ];
  selectedKeg: Keg = this.kegs[0];
  styles = [
    { value: 'Amber Ale', display: 'Amber Ale'},
    { value: 'Barleywine', display: 'Barleywine'},
    { value: 'Belgian Wit', display: 'Belgian Wit'},
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
  ];

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
    if(currentKeg.alcoholContent <= 6.5){
      return "strong";
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellPint(clickedKeg: Keg){
    clickedKeg.pints -= 1;
  }

  sellSmallGrowler(clickedKeg: Keg){
    clickedKeg.pints -= 2;
  }

  // sortByStyle(kegs) {
  //   (kegs).sort(kegs.style);
  //   console.log(kegs[].style);
  // }

  sellLargeGrowler(clickedKeg: Keg){
    clickedKeg.pints -= 4;
  }

  addKeg(name: string, brand: string, style: string, price: number, alcoholContent: number) {
    var newKeg = new Keg(name, brand, style, price, alcoholContent);
    this.kegs.push(newKeg);
  }

  isAlmostEmpty(clickedKeg: Keg) {
    if(clickedKeg.pints <= 10) {
      return "bg-danger";
    }
  }
}

export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public style: string, public price: number, public alcoholContent: number) {   }
}
