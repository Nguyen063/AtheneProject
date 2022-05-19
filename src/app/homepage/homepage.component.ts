import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  constructor(private _service:ExampleService) { }

  ngOnInit(): void {
   
  }
 
}
  




    
