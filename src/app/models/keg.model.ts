export class Keg {
  public done: boolean = false;
  constructor(public name: string, public brand: string, public price: string, public alcoholContent: number, public level: number) { }
}
