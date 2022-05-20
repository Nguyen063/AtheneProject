import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-fortutor',
  templateUrl: './fortutor.component.html',
  styleUrls: ['./fortutor.component.css']
})
export class FortutorComponent implements OnInit {

  constructor(private _service: ExampleService, private _router: Router) { }

  tutors: any;
  errMessage: string="";

  ngOnInit(): void {
    this.getTutors();
  }
  getTutors(){
    this._service.getBlogs().subscribe({
      next:(data)=> this.tutors = data,
      error: err => this.errMessage = err
    })
  }
  onSelect(data:any):void{
    this._router.navigate(['/tutor', data.id])
  }
}
