import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Shipment} from '../../../model/shipment/shipment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  currentCustomer: Customer;
  shipment: Shipment;
  shipments: Observable<Shipment[]>;

  show = false;
  display = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onCustomerUpdated(customer: Customer) {
    this.customerService.updateCustomer(customer).subscribe((customer) => this.currentCustomer = customer);
  }

  onShipmentAdded(shipment: Shipment) {
    this.customerService.createShipment(shipment.customerId, shipment).subscribe((shipment) => {
      this.shipment = shipment;
    });
  }

  toggleCustomerEditForm() {
    this.show = !this.show;
  }

  toggleShipmentAddForm() {
    this.display = !this.display;
  }
}
