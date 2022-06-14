import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerhttprequestService } from 'src/app/services/customerhttprequestservice.service';

import { HTTPServiceRequest } from 'src/app/services/httpRequestService';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.scss']
})
export class NewcustomerComponent implements OnInit {
  addCustomerForm!: FormGroup;
  isAddMode!: boolean;
  id!: string;

  constructor(private customerService: CustomerhttprequestService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private httpService: HTTPServiceRequest) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.isAddMode = !this.id;
    this.addCustomerForm = this.fb.group({
      customerid: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      website: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3)]]
    })

    if (!this.isAddMode) {
      this.customerService.getCustomerById(parseInt(this.id)).subscribe(response => {
        this.addCustomerForm.patchValue(response);
      })

    }
  }
  onSubmit() {
    if (this.isAddMode) {
      this.customerService.createCustomer(this.addCustomerForm.value).subscribe(response => {
        this.router.navigate(['showCustomers']);
        this.addCustomerForm.reset();
      })
    }
    else {
      this.customerService.updateCustomer(this.addCustomerForm.value).subscribe(response => {
        this.router.navigate(['showCustomers']);
      })
    }
  }
  onCancel() {
    this.router.navigate(['showCustomers']);
  }


}
