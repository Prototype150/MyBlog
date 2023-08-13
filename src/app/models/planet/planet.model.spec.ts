import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetModel } from './planet.model';

describe('PlanetModel', () => {
  let component: PlanetModel;
  let fixture: ComponentFixture<PlanetModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetModel]
    });
    fixture = TestBed.createComponent(PlanetModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
