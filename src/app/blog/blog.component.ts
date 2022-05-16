import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import {NgForm} from '@angular/forms'
import { Blog } from '../models/blog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();
    constructor(private _service: ExampleService, private _toast: ToastrService, private _router: Router,private _activatedRouter: ActivatedRoute) { }
  
    ngOnInit(): void {
     this.getProducts();

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
  getProducts(){
    this._service.getProducts().subscribe({
      next: data => this.blogs=data,
      error: err=> this.errMessage=err
    })
  }
  onSelect(data:any):void{
    this._router.navigate(['/blog', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
 
  submitData(form: NgForm){
    // console.log("Form data: ", form.value);
    // console.log("Model: ", this.product);
  
    if(this.blog._id==""){
      this._service.postProduct(this.blog).subscribe(res=>{
        // console.log("Res: ", res);
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          this._toast.success("Insert successfully!","Insert")
          // alert("Success!")
          this.getProducts();
        } else{
          alert("Fail!")
        }
      })
    
    }
    else{
      this._service.updateProduct(this.blog._id, this.blog).subscribe(res => {
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          // alert("Updated Success!");
          this._toast.info("Update successfully!","Update")
          this.onReset();
          this.getProducts();
        } else{
          alert("Fail!")
        }
      })
    }
    
  }
  
  edit(data: Blog){
    this.blog=data;
  }
  delete(id:any, form:NgForm){
    if(confirm("Are you sure you want to delete this product?")== true){
    this._service.deleteProduct(id).subscribe(res=>{
      let resData=JSON.parse(JSON.stringify(res));
      if(resData.message==="Success"){
  // alert("Delete Successfully!");
  this._toast.warning("Delete successfully!","Delete",{
    timeOut: 5000,
    progressBar:false
  });
  this.onReset(form);
          this.getProducts();
        } else{
          alert("Fail!")
        }
      }
    )
    
    }
  }
  
  
  onReset(form?: NgForm){
    if(form)
    form.reset();
    this.blog=new Blog();
  }
  }
