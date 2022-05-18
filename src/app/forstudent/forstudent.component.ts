import { ForStudentService } from './../services/for-student.service';
import { Component, OnInit } from '@angular/core';
import { LearnerProfile } from '../models/for-student';

@Component({
  selector: 'app-forstudent',
  templateUrl: './forstudent.component.html',
  styleUrls: ['./forstudent.component.css']
})
export class ForstudentComponent implements OnInit {

  learner: LearnerProfile= new LearnerProfile();
  learners:any;
  errMessage: string="" ;
  
  constructor(private _service: ForStudentService) { }

  ngOnInit(): void {
    this.getLearner()
  }
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=> this.errMessage=err
    })
   }
}
