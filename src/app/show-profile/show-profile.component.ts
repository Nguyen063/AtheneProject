import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
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
