import { Component, OnInit } from '@angular/core';
import { FortutorService } from '../services/fortutor.service';

@Component({
  selector: 'app-fortutor',
  templateUrl: './fortutor.component.html',
  styleUrls: ['./fortutor.component.css']
})
export class FortutorComponent implements OnInit {

tutors:any;
errMessage: string="" ;

constructor(private _service: FortutorService) { }

ngOnInit(): void {
  this.getTutors()
} 
getTutors(){
  this._service.getTutors().subscribe({
    next:data => this.tutors=data,
    error : err=> this.errMessage=err
  })
 }
}
