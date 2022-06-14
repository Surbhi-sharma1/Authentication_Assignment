import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthService } from '../services/authService';
import { User } from '../userModel';
class UserAndToken {
  user!: User;
  token!: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user') || 'null')
    );
    this.user = this.userSubject.asObservable();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  public get userValue(): User {
    return this.userSubject.value;
  }
  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
      console.log(Object.entries(res));
      this.authService.authenticate();

    })

  }
  Register() {
    this.router.navigate(['signup'])
  }


}
