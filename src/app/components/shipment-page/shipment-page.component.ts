import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shipment} from "../../model/shipment/shipment";
import {CustomerName} from "../../model/customerName/customerName";
import {Tracking} from "../../model/tracking/tracking";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ShipmentService} from "../../service/shipment-service/shipment.service";
import {TrackingService} from "../../service/tracking-service/tracking.service";
import {Customer} from "../../model/customer/customer";
import set = Reflect.set;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shipment-page',
  templateUrl: './shipment-page.component.html',
  styleUrls: ['./shipment-page.component.scss']
})
export class ShipmentPageComponent implements OnInit {

  customerNameAndDescr: CustomerName;
  trackings: Tracking[];
  status: string;
  shipmentId: number;
  // tracking: Tracking;

  constructor(private shipmentService: ShipmentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.shipmentId = +params.get('shipmentId');
          return this.shipmentService.getCustomernameAndShipmentDescription(Number(this.shipmentId))
        }
      )
    ).subscribe((customerNameAnd: CustomerName) => {
        this.customerNameAndDescr = customerNameAnd
      }
    );

    this.getTrackingList();
  }


  getTrackingList() {
     return this.shipmentService.getTrackingListByShipmentId(Number(this.shipmentId))
    .subscribe((trackings: Tracking[]) => this.trackings = trackings);
  }

  onSelectTrackingEvent() {
   this.addStatus({status: this.status, shipmentId: this.shipmentId});
   this.getTrackingList();
  }

  addStatus(tracking: Tracking) {
    return this.shipmentService.createTrackingByShipmentId(tracking).subscribe(
      (tracking) => tracking
    );
  }
}




