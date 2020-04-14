import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {Shipment} from "../../../model/shipment/shipment";

@Component({
  selector: 'app-customer-shipment',
  templateUrl: './customer-shipment.component.html',
  styleUrls: ['./customer-shipment.component.scss']
})
export class CustomerShipmentComponent implements OnInit {
  shipments: Shipment[];
  customerId: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.customerService.getCustomerShipments(Number(params.get('customerId'))).subscribe(c => {
        this.shipments = c;
        this.customerId = params.get('customerId');
      })
    });

  }
}
