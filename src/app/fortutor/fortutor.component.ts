import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FortutorService } from '../services/fortutor.service';

@Component({
  selector: 'app-fortutor',
  templateUrl: './fortutor.component.html',
  styleUrls: ['./fortutor.component.css']
})
export class FortutorComponent implements OnInit {

tutors:any;
errMessage: string="" ;
selectedId:any;
  file:any=null;
  confirm:boolean=true;
  close:boolean=true;

constructor(private _service: FortutorService, private _router:Router) { }

ngOnInit(): void {
  this.getTutors();

} 
getTutors(){
  this._service.getTutors().subscribe({
    next:data => this.tutors=data,
    error : err=> this.errMessage=err
  })
 }
 openConfirm(){
   this.confirm=!this.confirm
 }
 clickYes(){
   alert("Bạn đã đăng ký thành công");
   this.confirm=!this.confirm

 }
}



  



 
  