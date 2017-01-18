import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  constructor(public afService:AF,private router: Router) { }

  login() {

    this.afService.loginWithGoogle().then((data)=>{
      //se já estiver logado manda para a home page
      this.router.navigate(['']);

    })
  }

}
