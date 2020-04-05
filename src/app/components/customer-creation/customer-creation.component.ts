import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer-service/customer.service';

@Component({
  selector: 'app-customer-creation',
  templateUrl: './customer-creation.component.html',
  styleUrls: ['./customer-creation.component.scss']
})
export class CustomerCreationComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const controls = this.myForm.controls;
    console.log(this.myForm.value);

    this.customerService.createCustomer(this.myForm.value).subscribe((customer) => {
      console.log(customer);
    });
  }

  private initForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
  }
}
