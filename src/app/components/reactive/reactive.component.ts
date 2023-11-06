// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-reactive',
//   templateUrl: './reactive.component.html',
//   styleUrls: ['./reactive.component.css']
// })
// export class ReactiveComponent implements OnInit {

  
//   loginForm = this.formBuilder.group(
//     {
//       userName: ['', [Validators.required, Validators.minLength(4)]],
//       password: ['', [Validators.required,Validators.pattern(" ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$")]]
//     }
//   );

//   constructor(private formBuilder : FormBuilder ) {}

//   ngOnInit(): void {
//   }

// // access to the specified form controls
//   get registerFormControl(){
//     return this.loginForm.controls
//   }

//   onSubmit(){
//     console.log(this.loginForm.value)
//   }


// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/Users';
 
@Component({
 selector: 'app-reactive',
 templateUrl: './reactive.component.html',
 styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 
logInForm=this.formBuilder.group(
 {
 userName:['',Validators.required, Validators.minLength(4)],
 password:['',Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]
 }
);
 
 constructor(private formBuilder:FormBuilder) { }
 
 ngOnInit(): void {
 }
 get registerFormControl(){
 return this.logInForm.controls;
 }
 onSubmit(){
 console.log(this.logInForm.value);
 }
}
