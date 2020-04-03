import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCreationComponent } from './components/customer-creation/customer-creation.component';
import { ShipmentCreationComponent } from './components/shipment-creation/shipment-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreationComponent,
    ShipmentCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
