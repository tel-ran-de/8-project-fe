import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/customer";
import {Shipment} from "../../model/shipment/shipment";

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

  getCustomerShipments(id:number):Observable<any>{
    console.log(`${this.baseUrl}/customers/${id}/shipments`)
    return this.http.get(`${this.baseUrl}/customers/${id}/shipments`);

  }
}
