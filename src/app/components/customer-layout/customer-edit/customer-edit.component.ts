import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  private _customer: Customer;

  @Input()
  set customer(customer: Customer) {
    this._customer = customer;
    this.initForm();
  }

  @Output()
  customerChanged: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.customerChanged.emit(this.customerForm.value);
    this.customerForm.reset();
  }

  private initForm() {
    this.customerForm = this.fb.group({
      id: [this._customer ? this._customer.id : ''],
      name: [this._customer ? this._customer.name : '', Validators.required]
    });
    this.customerForm.get('id').disable();
  }
}
