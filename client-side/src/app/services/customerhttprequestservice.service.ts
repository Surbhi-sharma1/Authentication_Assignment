import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Customer } from '../userModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerhttprequestService {
  URL = 'http://localhost:3000/customers';
  url = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getCustomerList() {
    return this.http
      .get<{ name: string; id: number }[]>(this.url + 'customers')
      .pipe(
        map((res) => {
          const list: { name: string; id: number }[] = [];
          res.forEach((res) => {
            list.push(res);
          });
          return list;
        }),
        catchError(this.errorHandler)
      );
  }

  getCustomer() {
    return this.http
      .get<{ name: string; id: number }[]>(this.url + 'customers')
      .pipe(
        map((res) => {
          const list: { name: string; id: number }[] = [];
          res.forEach((res) => {
            list.push(res);
          });
          return list;
        }),
        catchError(this.errorHandler)
      );
  }

  // Getting Customer details.
  getCustomerDetails() {
    return this.http.get(this.URL);
  }

  // Getting all the users of a particular Customer.
  getAllUsersOfCustomer(id: any) {
    return this.http.get(this.URL + '/' + `${id}` + '/users');
  }

  // Get customer by ID.
  getCustomerById(id: number) {
    return this.http.get(this.URL + '/' + `${id}`)
  }
  // Updating customer details in the table
  updateCustomer(data: Customer) {
    return this.http.put(this.URL + '/' + `${data.customerid}`, data, this.httpOptions)
  }

  // For adding new Customer in the table.
  createCustomer(data: Customer) {
    const myData = {
      customerid: Number(data.customerid),
      name: data.name,
      website: data.website,
      address: data.address
    }
    return this.http.post(this.URL, myData, this.httpOptions);
  }
  // Deleting Customer from the customer table using Id.
  DeleteCustomerByID(id: any) {
    return this.http.delete(this.URL + '/' + `${id}`);
  }

  errorHandler(error: any) {
    let errorMessage = 'generic error';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
