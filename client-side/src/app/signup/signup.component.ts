import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerid: 0,
      id: 0,
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      roleName: 'subscriber',
      address: ['no address'],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.authService.register(this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['']);
    }),
      (error: any) => {
        this.Error("signup Not successful");
      };

  }
  Error(arg0: string) {
    throw new Error('Method not implemented.');
  }
  cancel() {
    this.router.navigate(['login']);
  }

}
