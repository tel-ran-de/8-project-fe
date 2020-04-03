import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Observable, Subject} from "rxjs";
import {Customer} from "../customer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customersArray: any[] = [];

  //dtOptions: this.DataTables.Settings = {};
  dtTriger: Subject<any> =new Subject();

  customers: Observable<Customer[]>;
  customer: Customer = new Customer();
  deleteMessage = false;
  customersList:any;

  ngOnInit(): void {
  }
}
