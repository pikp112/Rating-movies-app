import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  onLogin(username: string, password: string) {
    if(username === 'sorin' && password === '1234'){
      return 200;
    } else {
      return 403;
    }
  }

  onLogout() {
    this.router.navigate(['login']);
  }
}
