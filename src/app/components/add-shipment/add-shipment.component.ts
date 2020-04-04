import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrintService} from "../../service/print.service";

@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.scss']
})
export class AddShipmentComponent implements OnInit {
  myReactiveForm: FormGroup;


  constructor(private fb: FormBuilder,
              private printService: PrintService) {
  }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.myReactiveForm = this.fb.group({
      description: ['', [Validators.required]],
      customerId: ['', [Validators.required]]
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.myReactiveForm.get(controlName);
  }

  onSubmit() {
    const controls = this.myReactiveForm.controls;

    if (this.myReactiveForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.myReactiveForm.value);
  }
}
