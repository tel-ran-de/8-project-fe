import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {Shipment} from "../../../model/shipment/shipment";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  shipments: Shipment[];
  shipment: Observable<Shipment>;
  customerError: string;


  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  onCustomerIdChanged(id: number) {
    this.customerService.getCustomerShipments(id).subscribe(
      shipments => {
        this.shipments = shipments;
        this.customerError = '';
      },
      (error: HttpErrorResponse) => {
            if (error.status == 404) {
                this.customerError = `Customer with id ${error.error.customerId} not found`
            }
          }
    );
  }

  onShipmentAdded(shipment: Shipment) {
    this.customerService.createShipment(shipment.customerId, shipment).subscribe((shipment) => {
      this.shipment;

    });
  }
}
