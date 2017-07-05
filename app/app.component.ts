import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Taproom</h1>
    <h3>Currently on tap:</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>

    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg: Keg = null;

  masterKegList: Keg[] = [
    new Keg('Chocolate Hazelnut Porter', 'Heretic', 'Porter', 6, 7.0),
    new Keg('Herbs of a Feather', 'Coalition', 'Sour Ale', 6, 5.5),
    new Keg('Spruce Saison', 'Propolis', 'Saison', 8, 7.5),
    new Keg('Brett IPA', 'pFriem', 'IPA', 6, 6.6),
    new Keg('Rocketman Red', 'Rocketman Red', 'Red Ale', 5, 5.5),
    new Keg('Porter', 'Anchor', 'Porter', 5, 5.6),
    new Keg('Dry-Hopped Barleywine', 'Sierra Nevada/Avery', 'Barleywine', 7, 9.4),
    new Keg('Hoppy A-Hefe', 'StormBreaker', 'Hefeweizen', 6, 5.0),
    new Keg('Swami’s IPA', 'Pizza Port', 'IPA', 6, 6.8)
  ];

  newKegForm: boolean = false;
  // styles = [
  //   { value: 'Amber Ale', display: 'Amber Ale'},
  //   { value: 'Barleywine', display: 'Barleywine'},
  //   { value: 'Belgian Wit', display: 'Belgian Wit'},
  //   { value: 'Brown', display: 'Brown'},
  //   { value: 'Cider', display: 'Cider'},
  //   { value: 'Double IPA', display: 'Double IPA'},
  //   { value: 'Hefeweizen', display: 'Hefeweizen'},
  //   { value: 'IPA', display: 'IPA'},
  //   { value: 'Lager', display: 'Lager'},
  //   { value: 'Pale Ale', display: 'Pale Ale'},
  //   { value: 'Porter', display: 'Porter'},
  //   { value: 'Pilsner', display: 'Pilsner'},
  //   { value: 'Red Ale', display: 'Red Ale'},
  //   { value: 'Saison', display: 'Saison'},
  //   { value: 'Sour Ale', display: 'Sour Ale'},
  //   { value: 'Stout', display: 'Stout'},
  //   { value: 'Wheat', display: 'Wheat'},
  // ];



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
