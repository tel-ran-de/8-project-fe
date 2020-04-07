import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer-service/customer.service";

@Component({
  selector: 'app-show-customer-list',
  templateUrl: './show-customer-list.component.html',
  styleUrls: ['./show-customer-list.component.scss']
})
export class ShowCustomerListComponent implements OnInit {

  public customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(
      apiResponse => this.customers = apiResponse,
      error => console.log(error)
    );
  }

}
