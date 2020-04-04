import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-creation',
  templateUrl: './customer-creation.component.html',
  styleUrls: ['./customer-creation.component.scss']
})
export class CustomerCreationComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const controls = this.myForm.controls;
    console.log(this.myForm.value);
  }

  private initForm() {
    this.myForm = this.fb.group({
      customerId: ['', Validators.required],
      customerName: ['', Validators.required]
    });
  }
}
