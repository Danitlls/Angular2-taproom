import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  styleUrls: ['resources/styles/main.scss'],

  // encapsulation: ViewEncapsulation.None,
  template: `
  <section>
    <h1>Taproom</h1>
    <h3>Currently on tap:</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>

    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </section>
  `
})

export class AppComponent {
  selectedKeg: Keg = null;
  newKegForm: boolean = false;

  masterKegList: Keg[] = [
    new Keg('Chocolate Hazelnut Porter', 'Heretic', 'Porter', 6, 7.0),
    new Keg('Herbs of a Feather', 'Coalition', 'Sour Ale', 6, 5.5),
    new Keg('Spruce Saison', 'Propolis', 'Saison', 8, 7.5, 29),
    new Keg('Brett IPA', 'pFriem', 'IPA', 6, 6.6),
    new Keg('Rocketman Red', 'Rocketman Red', 'Red Ale', 5, 5.5),
    new Keg('Porter', 'Anchor', 'Porter', 5, 5.6),
    new Keg('Dry-Hopped Barleywine', 'Sierra Nevada/Avery', 'Barleywine', 7, 9.4),
    new Keg('Hoppy A-Hefe', 'StormBreaker', 'Hefeweizen', 6, 5.0),
    new Keg('Swami’s IPA', 'Pizza Port', 'IPA', 6, 6.8),
    new Keg('PBR', 'PBR', 'Pale Ale', 2, 5.4, 12),
    new Keg('Evil Dead Red', 'AleSmith', 'Amber Ale', 7, 7.2),
    new Keg('Wonka’s Wit', 'Block 15', 'Witbier', 6, 5.0),
    new Keg('Nut Brown Ale - Barrel Aged', 'AleSmith', 'Brown', 6, 5.0),
    new Keg('Blueberry Spaceship Box Cider', 'Superstition', 'Cider', 5, 6.9),
    new Keg('Heady Topper', 'Alchemist', 'Double IPA', 8, 8.0),
    new Keg('Vienna Lager', 'pFriem', 'Lager', 6, 5.3),
    new Keg('Pub Reserve Series: Pilsner Pie', 'Deschutes', 'Pilsner', 6, 5.8),
    new Keg('City of the Dead', 'Modern Times', 'Stout', 7, 7.5),
    new Keg('Hello My Name is Joe', '3 Sheeps', 'Wheat', 5, 7.7)
  ];

  finishedEditing() {
      this.selectedKeg = null;
    }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild)
  }

  // sortByStyle(kegs) {
  //   (kegs).sort(kegs.style);
  //   console.log(kegs[].style);
  // }

  // hideNewKegForm() {
  //   this.newKegForm = false;
  // }
  //
  showNewKegForm() {
    this.newKegForm = true;
  }
}
