import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { HTTPServiceRequest } from '../services/httpRequestService';
import Role from '../enum';
import { Router } from '@angular/router';
import { User } from '../userModel';
import { CustomerhttprequestService } from '../services/customerhttprequestservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  users: any = [];

  id!: number;
  customerList: any = [];
  roleList: { name: string; key: string }[] = [];
  constructor(private customerService: CustomerhttprequestService, private fb: FormBuilder, private httpRequestService: HTTPServiceRequest, private router: Router) {
  }

  ngOnInit(): void {
    this.httpRequestService.getUsers().subscribe(response => {
      this.users = response;
    })
    this.getRole();
    this.getCustomer();
  }
  userForm = this.fb.group({
    customerid: [],
    id: [],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    middlename: [''],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    roleName: ['', [Validators.required]],
    customerName: ['', [Validators.required]],
    address: ['', [Validators.required]],

  })
  getRole() {
    this.httpRequestService.getRoleList().subscribe(Response => {
      this.roleList = Response;
    })
  }
  getCustomer() {
    this.customerService.getCustomerList().subscribe(Response => {
      this.customerList = Response;
    })
  }
  onSubmit() {

    this.httpRequestService.createUser(this.userForm.value).subscribe(response => {
      this.router.navigate(['']);
      this.userForm.reset();
    })
  }

}
