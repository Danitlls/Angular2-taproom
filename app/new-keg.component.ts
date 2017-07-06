import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <button (click)="showNewKegForm()" *ngIf="newKegButton">Add a New Keg</button>
    <div id="form" *ngIf="newKegForm">
    <h2>New Keg</h2>
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
      <select #newStyle>
        <option *ngFor="let style of styles" value="{{style.value}}">
        {{style.display}}</option>
      </select>
      <br>
      <button (click)="submitNewKegForm(newName.value, newBrand.value, newStyle.value, newPrice.value, newAlcoholContent.value)" (click)="hideNewKegForm()">Submit</button>
    </div>
  `
})

export class NewKegComponent {
  newKegForm: boolean = false;
  newKegButton: boolean = true;
  @Output() newKegSender = new EventEmitter();
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

  submitNewKegForm(name: string, brand: string, style: string, price: number, alcoholContent: number) {
    var newKeg = new Keg(name, brand, style, price, alcoholContent);
    this.newKegSender.emit(newKeg);
    this.newKegButton = true;
  }

  hideNewKegForm() {
    this.newKegForm = false;
  }

  showNewKegForm() {
    this.newKegForm = true;
    this.newKegButton = false;
  }
}
