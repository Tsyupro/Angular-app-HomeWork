import { Component } from '@angular/core';

@Component({
  selector: 'app-plane',
  standalone: true,
  imports: [],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.scss'
})
export class PlaneComponent {
  plane = { model: 'Boeing 747', passengers: 416, range: 13430 };

}
