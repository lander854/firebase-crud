import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {AF} from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule,Routes} from "@angular/router";




export const firebaseConfig ={
  apiKey: "AIzaSyAbLlPx61FjMkc4WWsM2yMyWKBfhylmNiQ",
    authDomain: "fir-crud-df2da.firebaseapp.com",
    databaseURL: "https://fir-crud-df2da.firebaseio.com",
    storageBucket: "fir-crud-df2da.appspot.com",
    messagingSenderId: "607204979505"

};

const routes: Routes =[
{ path:'',component: HomePageComponent},
{path:'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
