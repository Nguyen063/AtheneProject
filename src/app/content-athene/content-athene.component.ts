import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogintroService } from '../services/blogintro.service';

@Component({
  selector: 'app-content-athene',
  templateUrl: './content-athene.component.html',
  styleUrls: ['./content-athene.component.css']
})
export class ContentAtheneComponent implements OnInit {

  selectedId: any;
 
  datas: any;
  errMessage: string="";
  constructor(private _service: BlogintroService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getDatas();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )

  
  }
  getDatas(){
    this._service.getDatas().subscribe({
      next: data => this.datas=data,
      error: err=> this.errMessage=err
    })
  }
  goBack(): void {
    this._router.navigate(['/homepage', { id: this.selectedId }])
  }

}