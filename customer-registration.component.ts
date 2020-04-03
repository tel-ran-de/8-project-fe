import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrintService} from "../../service/print.service";

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  myReactiveForm: FormGroup;


  constructor(private fb: FormBuilder,
              private printService: PrintService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myReactiveForm = this.fb.group({
      customerName: ['', [Validators.required]]
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.myReactiveForm.get(controlName);
  }

  onSubmit() {
    const controls = this.myReactiveForm.controls;

    if (this.myReactiveForm.invalid) {
      return;
    }
      this.printService.print(this.myReactiveForm.value);
    }

  }

