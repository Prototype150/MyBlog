import { Component } from '@angular/core';
import { PlanetModel } from 'src/app/models/planet/planet.model';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  constructor(public PlanetModel:PlanetModel){}
}
