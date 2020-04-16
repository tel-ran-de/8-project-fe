import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerEditForm: FormGroup;
  visible = true;
  displayed = false;

  /*private _customer: Customer;
*/
  /*@Input()
  set customer(customer: Customer) {
    this._customer = customer;
    this.initForm();
  }*/

  @Output()
  customerUpdated: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  toggle() {
    this.visible = false;
    this.displayed = true;
  }

  onSubmit() {
    this.customerUpdated.emit(this.customerEditForm.value);
    console.log(this.customerEditForm.value);
    this.customerEditForm.reset();
    this.toggle();
  }

  private initForm() {
    this.customerEditForm = this.fb.group({
      id: [''],
      name: ['']
    });
  }
}
