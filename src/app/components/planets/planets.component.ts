import { Component } from '@angular/core';
import { PlanetModel } from 'src/app/models/planet/planet.model';
import { PlanetsService } from 'src/app/services/planets/planets.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  planets : PlanetModel[];
  TestString:String = "Test";

  onPlanetClick(planet: PlanetModel) {
    console.log("Planet " + planet.Name + " was clicked");
  }

  constructor(private planetsService: PlanetsService){
    this.planets = planetsService.getAllPlanets();
  }
}