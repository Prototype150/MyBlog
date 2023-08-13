import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponModel } from './weapon.model';

describe('WeaponModel', () => {
  let component: WeaponModel;
  let fixture: ComponentFixture<WeaponModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponModel]
    });
    fixture = TestBed.createComponent(WeaponModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
