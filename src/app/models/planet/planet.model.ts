import { Component } from '@angular/core';

@Component({
  selector: 'app-planet',
  template:`{{Name}}`
})
export class PlanetModel {
  constructor(public Name:String, public Population:Number){}
}
