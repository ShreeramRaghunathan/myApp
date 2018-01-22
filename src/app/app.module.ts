import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginformComponent } from './login/loginform/loginform.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
		{
			path: '',
			redirectTo: 'mainpage', 
			pathMatch: 'full'
		},
		{
			path: 'mainpage',
			component: MainpageComponent
		},
		{
			path: 'login/loginform',
			component: LoginformComponent
		}
    ])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
