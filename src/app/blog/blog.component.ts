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

  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();
    constructor(private _service: ExampleService, private _toast: ToastrService, private _router: Router) { }
  
    ngOnInit(): void {
     this.getBlogs();

    }
  getBlogs(){
    this._service.getBlogs().subscribe({
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
      this._service.postBlog(this.blog).subscribe(res=>{
        // console.log("Res: ", res);
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          this._toast.success("Insert successfully!","Insert")
          // alert("Success!")
          this.getBlogs();
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
          this.getBlogs();
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
          this.getBlogs();
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
