import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryCreatorComponent } from './accessory-creator.component';

describe('AccessoryCreatorComponent', () => {
  let component: AccessoryCreatorComponent;
  let fixture: ComponentFixture<AccessoryCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoryCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
