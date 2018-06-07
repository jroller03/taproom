export class Keg {
  public done: boolean = false;
  public pintCount: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alcoholContent: number, public level: number, public pints: number) { }

  orderPint() {
    this.pintCount--;
    console.log(`${this.name}: ${this.pintCount} pints remaining.`)
  }

  colorCode() {
    if (this.pintCount < 10) {
      return "bg-danger";
    }
    else {
      return "bg-info";
    }
  }
}
