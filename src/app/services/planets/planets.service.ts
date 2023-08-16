import { Injectable } from '@angular/core';
import { PlanetModel } from 'src/app/models/planet/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  getAllPlanets() : PlanetModel[]{
    return [new PlanetModel("Terra",10), new PlanetModel("Moon", 1), new PlanetModel("Mars", 23)];
  }
}
