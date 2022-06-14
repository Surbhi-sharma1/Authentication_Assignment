import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerhttprequestService } from 'src/app/services/customerhttprequestservice.service';
import { HTTPServiceRequest } from 'src/app/services/httpRequestService';
import { Customer } from 'src/app/userModel';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.scss']
})
export class CustomerRowComponent implements OnInit {

  @Input('customerList') customers: Customer[] = [];

  isEditable: boolean[] = [];
  constructor(private customerService: CustomerhttprequestService, private router: Router, private httpRequestService: HTTPServiceRequest) { }

  ngOnInit(): void {
  }
  editCustomer(id: number) {

    this.router.navigate(['addCustomer', id]);
  }
  deleteCustomer(id: any) {
    this.customerService.DeleteCustomerByID(id).subscribe(response => {
      for (let i = 0; i < this.customers.length; i++) {
        if (this.customers[i].customerid == id) {
          this.customers.splice(i, 1);
        }
      }
    })
  }
  showUsers(id: number) {
    this.router.navigate(['showUsers', id]);
  }

  addCustomer() {

    this.router.navigate(['addCustomer']);
  }

}
