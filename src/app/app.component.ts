import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { CarComponent } from './car/car.component';
import { ShipComponent } from './ship/ship.component';
import { PlaneComponent } from './plane/plane.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyComponentComponent,CarComponent,ShipComponent,PlaneComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HomeWork';
  displayCar = false;
  displayPlane = false;
  displayShip = false;

  showCar() {
    this.displayCar = true;
    this.displayPlane = false;
    this.displayShip = false;
  }

  showPlane() {
    this.displayCar = false;
    this.displayPlane = true;
    this.displayShip = false;
  }

  showShip() {
    this.displayCar = false;
    this.displayPlane = false;
    this.displayShip = true;
  }
}
