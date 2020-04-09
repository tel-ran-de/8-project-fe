import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-show-shipment-list',
  templateUrl: './show-shipment-list.component.html',
  styleUrls: ['./show-shipment-list.component.scss']
})
export class ShowShipmentListComponent implements OnInit {

  shipmentForm: FormGroup;

  @Output()
  customerIdChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.customerIdChanged.emit(this.shipmentForm.get("id").value);
    this.shipmentForm.reset();
  }

  private initForm() {
    this.shipmentForm = this.fb.group({
      id: ['',Validators.required]
    });

  }
}
