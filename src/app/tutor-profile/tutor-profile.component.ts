import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

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

   openEditProfile(){
    this.open=!this.open
 }
 closeEdit(){
  this.open=!this.open
 }
}
