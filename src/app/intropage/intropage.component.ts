import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example.service';
import { Intro } from '../models/info'

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.css']
})
export class IntropageComponent implements OnInit {
  intros:any;
  errMessage:string="";
  
  intro: Intro=new Intro();

  constructor(private _service: ExampleService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getIntros();
    this._activatedRouter.paramMap.subscribe((param)=>{
      let id=param.get('id');
    }
    )
  }
  getIntros(){
    this._service.getIntros().subscribe({
      next: data => this.intros=data,
      error: err =>this.errMessage=err
    })
  }

}
