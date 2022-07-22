import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponCreatorComponent } from './weapon-creator.component';

describe('WeaponCreatorComponent', () => {
  let component: WeaponCreatorComponent;
  let fixture: ComponentFixture<WeaponCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
