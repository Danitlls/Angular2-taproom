import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <h3>Currently on tap:</h3>
    <ul>
      <li [class]="isAlmostEmpty(currentKeg)" (click)="isAlmostEmpty(currentKeg)" *ngFor="let currentKeg of kegs"><span [class]="strong(currentKeg)">{{currentKeg.brand}}, {{currentKeg.name}},  {{currentKeg.alcoholContent}}%, <span [class]="priceColor(currentKeg)">$ {{currentKeg.price}} </span>, {{currentKeg.pints}}</span> <button (click)="editKeg(currentKeg)">Edit!</button> <button (click)="sellPint(currentKeg)">Sold a Pint!</button></li>
    </ul>
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
      <button (click)="addKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">Submit</button>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Chocolate Hazelnut Porter', 'Heretic', 6, 7.0),
    new Keg('Herbs of a Feather', 'Coalition', 6, 5.5),
    new Keg('Spruce Saison', 'Propolis', 8, 7.5),
    new Keg('Brett IPA', 'pFriem', 6, 6.6),
    new Keg('Rocketman Red', 'Rocketman Red', 5, 5.5),
    new Keg('Porter', 'Anchor', 5, 5.6),
    new Keg('Dry-Hopped Barleywine', 'Sierra Nevada/Avery', 7, 9.4),
    new Keg('Hoppy A-Hefe', 'StormBreaker', 6, 5.0),
    new Keg('Swami’s IPA', 'Pizza Port', 6, 6.8)  ];
  selectedKeg: Keg = this.kegs[0];

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

  addKeg(name: string, brand: string, price: number, alcoholContent: number) {
    var newKeg = new Keg(name, brand, price, alcoholContent);
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
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {   }
}
