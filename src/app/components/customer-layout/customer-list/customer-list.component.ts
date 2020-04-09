import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input()
  customers: Customer[];

  @Output()
  customerUpdated: EventEmitter<Customer> =  new EventEmitter<Customer>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(customer: Customer) {
    console.log(customer);
    this.customerUpdated.emit(customer);
  }
}
