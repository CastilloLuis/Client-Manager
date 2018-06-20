import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

/* MATERIAL */
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent, data: {animation: 'tiger'}},
  {path: 'register', component: RegisterComponent, data: {animation: 'tiger'}}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlexLayoutModule
  ],
 // exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
