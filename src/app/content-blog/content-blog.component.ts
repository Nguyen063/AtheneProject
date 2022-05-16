import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.css']
})
export class ContentBlogComponent implements OnInit {
selectedId: any;
selectedName: any;
selectedContent: any;
selectedAuthor: any;
selectedTitle1: any;
selectedContent1: any;
selectedTitle2: any;
selectedContent2: any;
selectedTitle3: any;
selectedContent3: any;
  constructor(private _activatedRouter: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        let name=param.get('name')
        let content=param.get('content')
        let author=param.get('author')
        let title1=param.get('id')
        let content1=param.get('content1')
        let title2=param.get('id')
        let content2=param.get('content1')
        let title3=param.get('id')
        let content3=param.get('content1')
        if(id!=null){
          this.selectedId=parseInt(id);
          this.selectedName=name;
          this.selectedContent=content;
          this.selectedAuthor=author;
          this.selectedTitle1=title1;
          this.selectedContent1=content1;
          this.selectedTitle2=title2;
          this.selectedContent2=content2;
          this.selectedTitle3=title3;
          this.selectedContent3=content3;
        }
      }
    )
  }

  goBack(): void{
    this._router.navigate(['/blog', {id:this.selectedId}])
  }

}
