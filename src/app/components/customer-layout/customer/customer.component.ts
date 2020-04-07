import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer-service/customer.service";
import {Customer} from "../../../model/customer/customer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Observable<Customer[]>;
  currentCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customers = this.customerService.getCustomerList();
  }

  onCustomerChanged(customer: Customer) {
    this.customerService.createCustomer(customer).subscribe((customer) => {
      this.getCustomerList();
    });
  }
}
