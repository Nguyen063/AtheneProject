import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 blog:any;
  constructor(private _activatedRouter: ActivatedRoute, private _router:Router, private _service: ExampleService) { }

  ngOnInit(): void {
    // this.blog=this._service.getData();
      
  }

  // goBack(): void{
  //   this._router.navigate(['/drinks', {id:this.selectedId}])
  // }

}
