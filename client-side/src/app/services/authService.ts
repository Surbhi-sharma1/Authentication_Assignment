import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { url, User } from 'src/app/userModel';
import { environment } from 'src/environments/environment';
class UserAndToken {
    user!: User;
    token!: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem('user') || 'null')
        );
        this.user = this.userSubject.asObservable();
    }
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    register(user: User) {
        return this.http.post(`${url}users/signup`, user);
    }
    login(email: string, password: string) {
        return this.http.post(`${url}users/login`, { email, password }).pipe(
            map((data: any) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log();
                localStorage.setItem('user', JSON.stringify(Object.values(data.user)));
                localStorage.setItem('token', JSON.stringify(Object.values(data.token)));
                this.userSubject.next(data.user);
                return data;
            })
        );;
    }
    public get userValue(): User {
        return this.userSubject.value;
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.clear();
        const emptyUser: User = JSON.parse('null');
        this.userSubject.next(emptyUser);
        return this.isLoggedIn;
    }
    authenticate() {
        this.loggedIn.next(true);
        this.router.navigate(['']);
    }
    log() {
        this.loggedIn.next(false);
    }



}