import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShipmentListComponent } from './show-shipment-list.component';

describe('ShowShipmentListComponent', () => {
  let component: ShowShipmentListComponent;
  let fixture: ComponentFixture<ShowShipmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShipmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
