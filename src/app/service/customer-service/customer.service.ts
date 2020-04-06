import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getCustomerList() {
    return this.http.get(this.baseUrl);
  }
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers`, customer);
  }

  getCustomer(id: number) {

  }

  updateCustomer(id: number, name: string) {

  }
}
