import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForlearnerService } from '../services/forlearner.service';


@Component({
  selector: 'app-profiletutor',
  templateUrl: './profiletutor.component.html',
  styleUrls: ['./profiletutor.component.css']
})
export class ProfiletutorComponent implements OnInit {

  selectedId: any;
  learners: any;
  errMessage: string=""
  open:boolean=true;


  constructor(private _service: ForlearnerService,  private _activatedRouter: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.getLearner();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )
  }
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=>this.errMessage=err
    })
   }
  openEditProfile(){
    this.open=!this.open
  }
  closeEdit(){
    this.open=!this.open
  }
}


