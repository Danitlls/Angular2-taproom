import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <h3>Currently on tap:</h3>
    <ul>
      <li [class]="priceColor(currentKeg)" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.brand}}, {{currentKeg.name}}, {{currentKeg.alcoholContent}}, $ {{currentKeg.price}} <button (click)="editKeg(currentKeg)">Edit!</button></li>
    </ul>
    <hr>
    <div>
      <h3>{{selectedKeg.name}}</h3>
      <p>Keg Complete? {{selectedKeg.empty}}</p>
      <h3>Edit Keg</h3>
      <label>Enter Keg's New Price per pint:</label>
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
    new Keg('Chocolate Hazelnut Porter', 'Heretic', 6, '7.0%'),
    new Keg('Herbs of a Feather', 'Coalition', 6, '5.5%'),
    new Keg('Spruce Saison', 'Propolis', 8, '7.5%'),
    new Keg('Brett IPA', 'pFriem', 6, '6.6%'),
    new Keg('Rocketman Red', 'Rocketman Red', 5, '5.5%'),
    new Keg('Porter', 'Anchor', 5, '5.6%'),
    new Keg('Dry-Hopped Barleywine', 'Sierra Nevada/Avery', 7, '9.4%'),
    new Keg('Hoppy A-Hefe', 'StormBreaker', 6, '5.0%'),
    new Keg('Swami’s', 'Pizza Port', 6, '6.8%')  ];
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

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  addKeg(name: string, brand: string, price: number, alcoholContent: string) {
    var newKeg = new Keg(name, brand, price, alcoholContent);
    this.kegs.push(newKeg);
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      alert("This keg is done!");
    } else {
      alert("This keg is not done. Better get to work!");
    }
  }
}

export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) {   }
}
