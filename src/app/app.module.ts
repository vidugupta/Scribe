import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

let firebaseConfig = {
  apiKey: "AIzaSyAkEDl3WOv9GH7DgwQqy0QO57ApJauuLgQ",
  authDomain: "scribe-2d107.firebaseapp.com",
  projectId: "scribe-2d107",
  storageBucket: "scribe-2d107.appspot.com",
  messagingSenderId: "114895987108",
  appId: "1:114895987108:web:677243b804d50c520d6131",
  measurementId: "G-Z301QR3XP2"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
