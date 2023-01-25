import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router) {}

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  onLogin(user:User) {
    if(user.username=="moneytolia" && user.password=="123456"){
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', user.username);
      this.router.navigate(['/campaigns'])
    }
  }
}
