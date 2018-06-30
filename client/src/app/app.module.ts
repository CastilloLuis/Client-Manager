import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

import {SuiModule} from 'ng2-semantic-ui';
// import { SemanticModule } from './semantic/semantic.module';

const appRoutes: Routes = [
      {path: 'login', component: LoginComponent, data: {animation: 'tiger'}},
      {path: 'register', component: RegisterComponent, data: {animation: 'tiger'}},
      {path: 'dashboard', component: DashboardComponent, data: {animation: 'tiger'}},
      // {path: 'table', component: TableComponent, data: {animation: 'tiger'}},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardComponent,
    TableComponent,
    // TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SuiModule
  ],
 // exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
