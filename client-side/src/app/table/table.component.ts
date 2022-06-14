import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HTTPServiceRequest } from '../services/httpRequestService';
import { ActivatedRoute, Router } from '@angular/router';
import { EdituserComponent } from '../edituser/edituser.component';
import { stringify } from 'querystring';
import { CustomerhttprequestService } from '../services/customerhttprequestservice.service';

type User = {
  id: number;
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone: string;
  role: number;
  address: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [HTTPServiceRequest]

})
export class TableComponent implements OnInit {
  id: any;
  users: any = [];
  customer: any = [];
  role: any = [];
  showTable: boolean = false;
  constructor(private customerService: CustomerhttprequestService, private httpRequestService: HTTPServiceRequest, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (!this.id) {
      this.httpRequestService.getUsers().subscribe(Response => {
        this.users = Response;
      })
    }
    else {
      this.customerService.getAllUsersOfCustomer(this.id).subscribe(response => {

        this.users = response;
        if (this.users.length == 0) {
          this.showTable = !this.showTable;
          this.router.navigate(['showCustomers']);
          alert('No users found');
        }

      })
    }
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomer().subscribe(Response => {
      this.customer = Response;
    })

  }
  Update(user: User) {
    this.users.user = user;

    this.router.navigate(['/editUser/', user.id]);
  }

  onDelete(id: any) {
    this.httpRequestService.onDelete(id).subscribe(Response => {
      for (let i = 0; i < this.users.length; ++i) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
        }
      }
    })
  }

}


