import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { PlanetsService } from './services/planets/planets.service';
import { WeaponsService } from './services/weapons/weapons.service';
import { PlanetModel } from './models/planet/planet.model';
import { WeaponModel } from './models/weapon/weapon.model';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetsComponent,
    WeaponsComponent,
    PlanetModel,
    WeaponModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlanetsService,
    WeaponsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }