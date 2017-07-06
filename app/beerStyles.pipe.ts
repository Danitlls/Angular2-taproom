import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "beerStyles",
  pure: false
})


export class BeerStylesPipe implements PipeTransform {
  transform(input: Keg[], desiredStyle){
    var output: Keg[] = [];
    if (desiredStyle === "allStyles") {
      return input;
    }
    for (var ii = 0; ii < styles.length; ii++) {
      if (desiredStyle === styles[ii].value) {
        for (var i = 0; i < input.length; i++) {
          if (input[i].style === styles[ii].value) {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
  }
}

let styles = [
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
  { value: 'Witbier', display: 'Witbier'},
];
