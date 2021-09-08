import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './authentication/login/login.component';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    QuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
