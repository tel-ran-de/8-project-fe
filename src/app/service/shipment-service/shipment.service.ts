import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private baseUrl = '/api';
  constructor(private http: HttpClient) { }

  getShipmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shipment/`);
  }

  getTrackingByShipmentId(shipmentId: number): Observable<any> {
    return this.http.get( `${this.baseUrl}/shipment/${shipmentId}` );
  }
}
