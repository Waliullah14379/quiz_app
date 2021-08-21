import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:'' , redirectTo:"login",pathMatch:"full"},

  {path:"login" , component:LoginComponent},
  {path:"signUp", component:SignUpComponent},

  {path:"quiz" , component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
