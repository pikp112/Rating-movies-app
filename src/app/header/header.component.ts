import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.onLogout();
  }
}
