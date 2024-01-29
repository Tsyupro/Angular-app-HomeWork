import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent {
  car = { brand: 'Mercedes', model: 'S-Class', year: 2023 };

}
