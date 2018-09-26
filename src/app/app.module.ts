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
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
     FormsModule, 
     MenubarModule,
     BrowserAnimationsModule,
     ButtonModule,
     InputTextModule,
     DialogModule,
     RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
