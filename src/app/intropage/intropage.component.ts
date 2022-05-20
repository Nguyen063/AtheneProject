import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogintroService } from '../services/blogintro.service';



@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.css']
})
export class IntropageComponent implements OnInit {
  intros:any;
  errMessage:string="";
  
  constructor(private _service: BlogintroService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
   this.getIntros();
  }
 
  getIntros(){
    this._service.getIntros().subscribe({
      next: data => this.intros=data,
      error: err=> this.errMessage=err
    })
  }
}
