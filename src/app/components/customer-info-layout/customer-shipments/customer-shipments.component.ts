import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Shipment} from '../../../model/shipment/shipment';
import {switchMap} from 'rxjs/operators';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-shipments',
  templateUrl: './customer-shipments.component.html',
  styleUrls: ['./customer-shipments.component.scss']
})

export class CustomerShipmentsComponent implements OnInit {
  customerId: number;
  customerName: string;

  public _customer: Customer;

  @Input()
  set customer(customer: Customer) {
    console.log(customer);
    this._customer = customer;
    this.customerName = customer.name;
  }

  @Input()
  shipments: Shipment[];

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Observable in Observable - valid solution but can be done in other way - pls see below
    /*this.route.paramMap.subscribe(params => {
      this.customerService.getCustomerShipments(Number(params.get('customerId'))).subscribe(c => {
        this.shipments = c;
        this.customerId = params.get('customerId');
      })
    });*/
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.customerId = +params.get('customerId');
          return this.customerService.getCustomerShipments(this.customerId);
        }
      )
    ).subscribe((shipments: Shipment[]) => {
      this.shipments = shipments;
    });
  }
}
