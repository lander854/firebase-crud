import { Component } from '@angular/core';
import {AF} from './providers/af';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public isLoggedIn: boolean;

 constructor(public afService: AF, private router: Router) {
  /*
  o codigo abaixo verifica de forma ASYNC se o usuário está logado
  se estiver, irá rediciona-lo para a pagina de login.

  */
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Não está logado.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;
          // a linha abaixo rediciona o usuário para a homepage se ele já estiver logado.
          this.router.navigate(['']);
        }
      }
    );
  }
  logout() {
    this.afService.logout();
  }
}