import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { PlanetsService } from './services/planets/planets.service';
import { WeaponsService } from './services/weapons/weapons.service';
import { PlanetModel } from './models/planet/planet.model';
import { WeaponModel } from './models/weapon/weapon.model';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    WeaponsComponent,
    PlanetModel,
    WeaponModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    PlanetsService,
    WeaponsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
