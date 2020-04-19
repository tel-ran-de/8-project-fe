import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Shipment} from '../../../model/shipment/shipment';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-shipment-create',
  templateUrl: './customer-shipment-create.component.html',
  styleUrls: ['./customer-shipment-create.component.scss']
})
export class CustomerShipmentCreateComponent implements OnInit {
  shipmentCreateForm: FormGroup;
  public _customer: Customer;

  @Input()
  set customer(customer: Customer) {
    console.log(customer);
    this._customer = customer;
    this.initForm();
  }

  @Output()
  shipmentAdded: EventEmitter<Shipment> = new EventEmitter<Shipment>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    console.log(this._customer);
    this.shipmentCreateForm = this.fb.group({
      customerId: [this._customer ? this._customer.id : null],
      description: ['']
    });
  }

  onSubmit() {
    this.shipmentAdded.emit(this.shipmentCreateForm.value);
    console.log(this.shipmentCreateForm.value);
    this.shipmentCreateForm.reset();
  }
}
