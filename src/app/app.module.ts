import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShipmentComponent } from './components/add-shipment/add-shipment.component';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { ReactiveFormsModule} from '@angular/forms';
import { CustomerCreationComponent } from './components/customer-creation/customer-creation.component';
import { HttpClientModule} from '@angular/common/http';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShipmentComponent,
    ValidationErrorsComponent,
    CustomerCreationComponent,
    ListCustomersComponent,
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
