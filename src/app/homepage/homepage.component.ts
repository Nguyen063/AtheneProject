import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { Homepage } from '../models/homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homepage: Homepage= new Homepage();
  homepages:any;
  errMessage: string="" ;

  constructor(private _service:ExampleService) { }

  ngOnInit(): void {
    this.getHomepage()
  }
  getHomepage(){
    this._service.getHomepage().subscribe({
      next:data => this.homepages=data,
      error : err=> this.errMessage=err
    })
   }
}
  




    
