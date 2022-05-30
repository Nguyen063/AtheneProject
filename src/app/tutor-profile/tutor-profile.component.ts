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
  }

}
