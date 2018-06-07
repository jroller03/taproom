import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Kegs';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  kegs: Keg[] = [
    new Keg('Red Ipa','Sharkbite', '$3.45', 6.7 ,3, 100),
    new Keg('Harp','Irish Half and Half', '$5.00', 3.4 ,2, 110),
    new Keg('Yeungling','Yeungling Brewery', '$4.45', 4.6 ,1, 105)
  ];
  selectedKeg = null;

  editKeg(clickedKeg) {
  this.selectedKeg = clickedKeg;
  }
  levelColor(currentKeg){
  if (currentKeg.level === 3){
    return "bg-danger";
  } else if (currentKeg.level === 2) {
    return  "bg-warning";
  } else {
    return "bg-info";
  }
}
finishedEditing() {
    this.selectedKeg = null;
  }
}
