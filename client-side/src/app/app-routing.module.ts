import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/authentication/authGuard';

import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer/customer.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'showUsers', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'addUser', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'editUser/:id', component: EdituserComponent, canActivate: [AuthGuard] },
  { path: 'showCustomers', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'showUsers/:id', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'addCustomer', component: NewcustomerComponent, canActivate: [AuthGuard] },
  { path: 'addCustomer/:id', component: NewcustomerComponent, canActivate: [AuthGuard] },
  { path: 'signOut', component: LoginComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
