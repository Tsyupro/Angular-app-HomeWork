import { Component } from '@angular/core';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent {
  ship = { name: 'MV Symphony of the Seas', type: 'круїзний', length: 362 };

}
