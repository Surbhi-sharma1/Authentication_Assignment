import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/authService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: boolean = true;
  isLoggedIn$!: Observable<boolean>;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

  }
  signOut() {
    this.authService.logout;
    this.router.navigate(['']);
    this.toggle = false

    return this.authService.isLoggedIn;

  }

}


