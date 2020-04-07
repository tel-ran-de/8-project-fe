import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShipmentComponent } from './components/shipment-layout/add-shipment/add-shipment.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { ReactiveFormsModule} from "@angular/forms";
import { CustomerEditComponent } from './components/customer-layout/customer-edit/customer-edit.component';
import { HttpClientModule} from "@angular/common/http";
import { CustomerListComponent } from './components/customer-layout/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer-layout/customer/customer.component';
import { ShipmentComponent } from './components/shipment-layout/shipment/shipment.component';



@NgModule({
  declarations: [
    AppComponent,
    AddShipmentComponent,
    ValidationErrorsComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerComponent,
    ShipmentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
