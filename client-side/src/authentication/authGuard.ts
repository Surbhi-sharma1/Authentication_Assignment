import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/services/authService';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authService.isLoggedIn
            .pipe(
                take(1),
                map((isLoggedIn: boolean) => {
                    if (!isLoggedIn) {
                        this.router.navigate(['/signin']);
                        alert('Please Login First')
                        return false;
                    }
                    return true;
                }))

    }
}