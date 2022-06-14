import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { HTTPServiceRequest } from './services/httpRequestService';
import { EdituserComponent } from './edituser/edituser.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRowComponent } from './customer/customer-row/customer-row.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/authentication/authGuard';
import { AuthService } from './services/authService';
import { JwtInterceptor } from 'src/authentication/jwtInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddComponent,
    EdituserComponent,
    CustomerComponent,
    CustomerRowComponent,
    NewcustomerComponent,
    SignupComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [HTTPServiceRequest, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
