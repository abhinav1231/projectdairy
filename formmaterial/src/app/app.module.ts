import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { RouterModule,Routes} from '@angular/router';
import {AuthService}  from './auth.service';


import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule
} from "@angular/material";

import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SandyComponent } from './sandy/sandy.component';
import { AbhinavComponent } from './abhinav/abhinav.component';


const appRoutes: Routes = [
    { path: '',redirectTo :'login', pathMatch :'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', children : [
        { path: '', redirectTo : 'sandy',pathMatch :'full'},        
        { path: 'sandy', component : SandyComponent},        
        { path: 'abhinav', component : AbhinavComponent},        
    ]},

    { path: '**', component: SignupComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SandyComponent,
    AbhinavComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MaterialModule ,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,

    RouterModule.forRoot(appRoutes,{useHash: false})
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
