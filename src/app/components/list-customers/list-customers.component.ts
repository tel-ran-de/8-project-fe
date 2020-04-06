import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer-service/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})

export class ListCustomersComponent implements OnInit {
  customers = [];
  constructor(private apiService: CustomerService) { }

  ngOnInit() {
    this.apiService.getCustomerList().subscribe((data: any[]) => {
      console.log(data);
      this.customers = data;
    });
  }

}
