import { Component, OnInit } from '@angular/core';
import { ForlearnerService } from '../services/forlearner.service';

@Component({
  selector: 'app-forlearner',
  templateUrl: './forlearner.component.html',
  styleUrls: ['./forlearner.component.css']
})
export class ForlearnerComponent implements OnInit {

  learners:any;
  errMessage: string="" ;

  constructor(private _service: ForlearnerService) { }

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
  
}

