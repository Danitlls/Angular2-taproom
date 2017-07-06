export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public style: string, public price: number, public alcoholContent: number, public pints: number = 124) {   }
}
