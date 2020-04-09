import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/customer";
import {Shipment} from "../../model/shipment/shipment";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl: string = '/api';

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers`, customer);
  }

  getCustomer(id: number) {

  }

  updateCustomer(id: number, name: string) {

  }

  getCustomerShipments(id:number): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.baseUrl}/customers/${id}/shipments`);
  }

  createShipment(customerId:number,shipment:Shipment): Observable<Shipment> {

    return this.http.post<Shipment>(`${this.baseUrl}/customers/${customerId}/shipments`,shipment);

  }
}
