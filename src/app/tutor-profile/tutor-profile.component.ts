import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  profile: Profile= new Profile();
  profiles:any;
  errMessage: string="" ;
  open:boolean= true;

  constructor(private _service:ProfileService) { }

  ngOnInit(): void {
    this.getProfiles()
  }
  getProfiles(){
    this._service.getProfiles().subscribe({
      next:data => this.profiles=data,
      error : err=> this.errMessage=err
    })
   }

   openEditProfile(data: Profile){
    this.open=!this.open
    this.profile =data;
 }
 closeEdit(){
  this.open=!this.open
 }
 // Save
// submitData(form: NgForm){

//   if(this.profile._id==""){
//     this._service.postProfile(this.profile).subscribe(res =>{
//       let resData=JSON.parse(JSON.stringify(res));
//       if(resData.message ==="success"){
//         // alert("Success");
//         this.getProfiles();

//       }else{alert("Failed")
//     } 
//     })
//   } else{
//     this._service.updateProfile(this.profile._id,this.profile).subscribe(res =>{
//       let resData=JSON.parse(JSON.stringify(res));
//       if(resData.message ==="success"){
//         //alert("Updated Successfully");
//         this.getProfiles();

//       }else alert("Failed")
//     })
//   }
//   }
//   edit(data: Profile){
//     console.log(data);
//     this.profile =data
//   }
//   onReset(form?:NgForm){
//     if(form)
//     form.reset();
//     this.profile=new Profile();
//   }
}
