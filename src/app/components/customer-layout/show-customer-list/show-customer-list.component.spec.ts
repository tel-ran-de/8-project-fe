import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerListComponent } from './show-customer-list.component';

describe('ShowCustomerListComponent', () => {
  let component: ShowCustomerListComponent;
  let fixture: ComponentFixture<ShowCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
