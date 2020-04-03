import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCreationComponent } from './shipment-creation.component';

describe('ShipmentCreationComponent', () => {
  let component: ShipmentCreationComponent;
  let fixture: ComponentFixture<ShipmentCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
