import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
// import * as CryptoJS from 'crypto-js';
declare var $: any 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: any
  // emailVerify: any
  // resetPassword: any
  userRegesterdData: any
  email:any

  // loginForm:FormGroup
    constructor( private router:Router , private spinner: NgxSpinnerService) { }
  ngOnInit() {
//  this.loginForm
 this.emailVerify
 this.resetPassword
 this.userRegesterdData = localStorage.getItem('signUpFormData');
 this.userRegesterdData = JSON.parse(this.userRegesterdData)
 console.log(this.userRegesterdData);
 this.email = this.userRegesterdData.userEmail
 console.log(this.userRegesterdData.userEmail);
  }
// login Form
    loginForm:FormGroup = new FormGroup({
      userEmail : new FormControl('' ,[ Validators.required ,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password : new FormControl('', [ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}') ])
    })
// verify email form
    emailVerify:FormGroup = new FormGroup({
      userEmail : new FormControl('' ,[ Validators.required]),

    })
    // reset pasword form
   resetPassword:FormGroup= new FormGroup({
      password : new FormControl('', [ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}') ]),
      confirmPassword : new FormControl('', [ Validators.required ])
    })
// get user data from local storage



onLogin(){   
    if (this.userRegesterdData.userEmail == this.loginForm.value.userEmail && this.userRegesterdData.password == this.loginForm.value.password) {
      console.log("value matched", this.userRegesterdData.userEmail, this.userRegesterdData.password, this.loginForm.value.userEmail, this.loginForm.value.password);
      // var key = Crypto.enc.Utf8.parse('jtxkfkf');
      // console.log(key.words);
      
      this.spinner.show();
 setTimeout(() => {
  this.spinner.hide();
}, 3000);
localStorage.setItem('token' , "@#ksjhdb87238625#343")
      this.router.navigate(['/home']);
    }
    else {
console.log("Invalid");
    }
   

}
verifyEmail(){
  if (this.userRegesterdData.userEmail == this.emailVerify.value.userEmail ) {
    console.log("value matched", this.emailVerify.value.userEmail, this.userRegesterdData.userEmail);
    $('#resetPasswordModal').modal('show')
  }
  else {
alert("Enter valid user email")
$('#myModal').modal('hide')
    this.router.navigate(['login']);

  }
}
onResetPassword(){
  this.userRegesterdData.password = this.emailVerify.value.resetPassword ; //problem faced here
  console.log(this.userRegesterdData);
  // $('#resetPasswordModal').modal('hide')
  $('#myModal').modal('hide')
}
resetPasswordModal(){
  console.log("ts modal call here");
  $('#resetPasswordModal').modal('show')
}
forgetPasswordmodal(){
  $('#emailVerifyModal').modal('show') 
}
}