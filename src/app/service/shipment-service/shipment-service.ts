import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private baseUrl = '/api';
  constructor(private http: HttpClient) { }

  getShippingList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shipment/`);
  }
}
