import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  login(loginForm:NgForm){
    const token:any=this.authService.onLogin(loginForm.value)
    if(token){
      localStorage.setItem('token',token.username);
      console.log('login successful')
    }
    else{
      console.log('login failed')
    }
  }
}
