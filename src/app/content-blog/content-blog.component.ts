import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.css']
})
export class ContentBlogComponent implements OnInit {
  selectedId: any;
 
  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();
  constructor(private _service: ExampleService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getBlogs();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )

  
  }
  getBlogs(){
    this._service.getBlogs().subscribe({
      next: data => this.blogs=data,
      error: err=> this.errMessage=err
    })
  }
  goBack(): void {
    this._router.navigate(['/blog', { id: this.selectedId }])
  }

}
