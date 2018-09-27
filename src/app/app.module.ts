
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {DialogModule} from 'primeng/dialog';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import {KeyFilterModule} from 'primeng/keyfilter';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', children: [
    { path: 'home', component: HomeComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainNavigationComponent,
    MovieDetailsComponent,
    SignupComponent,
    SigninComponent,
    HomeNavigationComponent
  ],
  imports: [
    BrowserModule,
     FormsModule, 
     MenubarModule,
     BrowserAnimationsModule,
     ButtonModule,
     InputTextModule,
     DialogModule,
     PasswordModule,
     CalendarModule,
     KeyFilterModule,
     RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

