import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForlearnerService } from '../services/forlearner.service';

@Component({
  selector: 'app-forlearner',
  templateUrl: './forlearner.component.html',
  styleUrls: ['./forlearner.component.css']
})
export class ForlearnerComponent implements OnInit {

  selectedId: any;
  learners:any;
  errMessage: string="" ;
  confirm:boolean=true;
  close:boolean=true;

  constructor(private _service: ForlearnerService, private _router: Router) { }

  ngOnInit(): void {
    // this.getLearnerInfor()
    // this.getTutorFinding()
    this.getLearner();
  } 
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=> this.errMessage=err
    })
   }
   openConfirm(){
    this.confirm=!this.confirm
  }
  clickYes(){
    alert("Bạn đã gửi yêu cầu thành công");
    this.confirm=!this.confirm
 
  }

  onSelect(data:any):void{
    this._router.navigate(['/forlearner', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
}

