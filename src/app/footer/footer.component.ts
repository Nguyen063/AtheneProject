import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogintroService } from '../services/blogintro.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  selectedId: any;

  datas: any;
  errMessage: string="";
  constructor(private _service: BlogintroService, private _router: Router) { }

  ngOnInit(): void {
    this.getDatas();
  }
  getDatas(){
    this._service.getDatas().subscribe({
      next: data => this.datas=data,
      error: err=> this.errMessage=err
    })
  }
  onSelect(data:any):void{
    this._router.navigate(['/homepage', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
}
