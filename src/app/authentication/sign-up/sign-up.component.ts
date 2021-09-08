import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // signUpForm: any
  fullName:any
  
  signUpFormSubmit(){
    localStorage.setItem('signUpFormData', JSON.stringify(this.signUpForm.value))
    console.log(this.signUpForm.value);
       
}

  constructor( private router:Router ,private spinner: NgxSpinnerService  , ) {
 
   }
  ngOnInit() {
    this.signUpForm   
}
signUpForm: FormGroup = new FormGroup({
  firstName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,60}$/)]),
  lastName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,60}$/)]),
  userEmail : new FormControl('' ,[ Validators.required ,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
  mobileNumber: new FormControl('' ,[ Validators.required , Validators.pattern(/^[0-9]{10,10}$/)]),
  password : new FormControl('', [ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}') ]),
  confirmPassword : new FormControl('', [ Validators.required ])

}) 
}