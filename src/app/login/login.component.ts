import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.username.trim().length == 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length == 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.authService.onLogin(this.username, this.password);
      if (res == 200) {
        this.router.navigate(['home']);
      }
      if (res == 403) {
        this.errorMsg = 'Invalid credentials';
      }
    }
  }
}
