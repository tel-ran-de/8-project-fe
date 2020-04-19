import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Shipment} from '../../../model/shipment/shipment';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {Tracking} from '../../../model/tracking/tracking';
import {ShipmentService} from '../../../service/shipment-service/shipment.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  currentCustomer: Customer;
  shipment: Shipment;
  shipments: Shipment[];
  customerId: number;

  showCustomerEditForm = false;
  showShipmentAdditionForm = false;
  showCustomerEdited = false;
  showShipmentAdded = false;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.customerId = +params.get('customerId');
          return this.customerService.getCustomer(this.customerId);
        }
      )
    ).subscribe(customer => this.currentCustomer = customer);
  }

  getCustomerShipmentList() {
    this.customerService.getCustomerShipments(this.customerId).subscribe(
      (shipments: Shipment[]) => this.shipments = shipments
    );
  }

  onCustomerUpdated(customer: Customer) {
    this.customerService.updateCustomer(customer).subscribe(
      (customer) => {
        this.currentCustomer = customer;
        this.showCustomerEdited = true;
      }
    );
  }

  onShipmentAdded(shipment: Shipment) {
    this.customerService.createShipment(this.customerId, shipment).subscribe(
      () => {
        this.getCustomerShipmentList();
        this.showShipmentAdded = true;
      }
    );
  }

  toggleCustomerEditForm() {
    this.showCustomerEditForm = !this.showCustomerEditForm;
  }

  toggleShipmentAddForm() {
    this.showShipmentAdditionForm = !this.showShipmentAdditionForm;
  }
}
