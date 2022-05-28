import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// Pop up
openlogin:boolean= true;
opensignup:boolean= true;

// Check validator
public formUpload=this._formBuilder.group({phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/((09|03|07|08|05)+[0-9]{8}\b)/g)]]},{pw:['',[Validators.required]]} )
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
      
  }

 // Get input
 get phoneInput(){
  return this.formUpload.controls['phone'];
}
get pwInput(){
  return this.formUpload.controls['pw'];
}
//  Open &Close pop up
openSignin(){
   this.openlogin=!this.openlogin 
}
closeLogin(){
  this.openlogin=!this.openlogin
}
openSignup(){

  this.opensignup=!this.opensignup
}
closeSignup(){
  this.opensignup=!this.opensignup
}

}
