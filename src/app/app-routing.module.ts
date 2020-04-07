import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./components/customer-layout/customer/customer.component";
import {ShipmentComponent} from "./components/shipment-layout/shipment/shipment.component";


const routes: Routes = [
  {path:'app/customer', component: CustomerComponent},
  {path:'app/shipment', component: ShipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
