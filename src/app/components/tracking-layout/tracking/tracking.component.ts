import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Tracking} from '../../../model/tracking/tracking';
import {Shipment} from '../../../model/shipment/shipment';
import {TrackingService} from '../../../service/tracking-service/tracking-service';
import {ShipmentService} from '../../../service/shipment-service/shipment-service';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  tracking: Observable<Tracking[]>;
  shipment: Observable<Shipment[]>;
  currentTracking: Tracking;

  constructor(private trackingService: TrackingService, private shipmentService: ShipmentService) { }

  ngOnInit(): void {
     this.getTrackingList();
     this.getShipmentList();
  }
  getTrackingList() {
    this.tracking = this.trackingService.getTrackingList();
  }

  getSList() {
    this.shipment = this.shipmentService.getShipmentList();
  }
  onTrackingChanged(tracking: Tracking) {
    this.trackingService.createTracking(tracking).subscribe((newTracking) => {
      this.getTrackingList();
    });
  }

  onShipmentChanged(id: number) {
    this.trackingService.getTrackingById(id);
  }
}
