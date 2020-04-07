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

  @Input()
  customer: Customer;

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
      id: [this.customer ? this.customer.id : ''],
      name: [this.customer ? this.customer.name : '', Validators.required]
    });
    this.customerForm.get('id').disable();
  }
}
