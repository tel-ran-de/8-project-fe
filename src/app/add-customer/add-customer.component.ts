import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../customer";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private http: HttpClient) {}
  customer: Customer = new Customer();
  submitted = false;

  ngOnInit(): void {
    this.submitted = false;
  }

  customersaveform = new FormGroup({
    customer_name:new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  saveCustomer(saveCustomer){
    this.customer=new Customer();
    this.customer.name = this.CustomerName.value;
    this.submitted = true;
    this.save();
  }

  save(){
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  get CustomerName(){
    return this.customersaveform.get('customer_name');
  }

  addCustomerForm(){
    this.submitted = false;
    this.customersaveform.reset();
  }

  onSubmit(){
    const formData: any = new FormData();
    formData.append('customer_name', this.CustomerName.value);
    this.http.post('http://localhost:4200/add-customer', formData).subscribe(
      (response) => console.log(this.customersaveform.value),
        error => console.log(error))
  }
}
