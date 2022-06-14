import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { User, Customer } from "../userModel";
import { Injectable, Input, Type } from "@angular/core";
import { response } from "express";
import { catchError } from "rxjs/operators";
import { map, Observable, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HTTPServiceRequest {
    data: any = [];
    user: any = [];

    data1: any = []
    idInt: number | undefined;

    url = 'http://localhost:3000/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    constructor(private http: HttpClient) { }

    // Getting Role list.
    getRoleList() {
        return this.http
            .get<{ name: string; key: string }[]>(this.url + 'roles')
            .pipe(
                map((res) => {
                    const roleslist: { name: string; key: string }[] = [];
                    res.forEach((response) => {
                        roleslist.push(response);
                    });
                    return roleslist;
                }),
                catchError(this.errorHandler)
            );
    }

    // Getting all Users.
    getUsers() {
        return this.http.get(this.url + 'users');
    }

    // Deleting user from Usertable using Id.
    onDelete(id: number) {
        return this.http.delete(this.url + 'users/' + `${id}`);
    }

    // Updating Particular user Details.
    updateUser(user: User) {
        const url = 'http://localhost:3000/users/';

        return this.http.put(url + user.id, user, this.httpOptions);
    }

    // Adding new user in the usertable.
    createUser(data: User) {
        const myBody = {
            customerid: Number(data.customerid),
            id: Number(data.id),
            firstname: data.firstname,
            middlename: data.middlename,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            roleName: data.roleName,
            customerName: data.customerName,
            address: data.address
        }

        const url = 'http://localhost:3000/users';
        return this.http
            .post(url, myBody, this.httpOptions)
            .pipe(catchError(this.errorHandler));

    }

    // Getting Details of specific user using Id.
    getUserById(id: any) {
        const url = 'http://localhost:3000/users';
        return this.http.get(`${url}/${id}`, this.httpOptions)
            .pipe(
                map((res: any) => {
                    return res || {};
                }),
                catchError(this.errorHandler)
            );
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
