import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-showprofiles',
  templateUrl: './showprofiles.component.html',
  styleUrls: ['./showprofiles.component.css']
})
export class ShowprofilesComponent implements OnInit {
  
  profile: Profile= new Profile();
  profiles:any;
  errMessage: string="" ;

  constructor(private _service: ProfileService) { }

  ngOnInit(): void {
    this.getProfiles()
  }
  getProfiles(){
    this._service.getProfiles().subscribe({
      next:data => this.profiles=data,
      error : err=> this.errMessage=err
    })
   }
}
