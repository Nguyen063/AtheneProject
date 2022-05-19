import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IBlog } from './interfaces/blogs';
import { Blog } from './models/blog';
import { Intro } from './models/info';


const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  

  constructor(private _http: HttpClient) { }

  getBlogs(): Observable<IBlog[]>{
    return this._http.get<IBlog[]>(`${baseUrl}/blog`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  getIntros():Observable<Intro[]>{
    return this._http.get<Intro[]>(`${baseUrl}/intros`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  postBlog(data: Blog){
return this._http.post(`${baseUrl}/blog`,data)
  }
  
  postIntro(data:Intro){
    return this._http.post(`${baseUrl}/intropage`,data)
  }

  updateProduct(id:any, data:any){
    return this._http.patch(`${baseUrl}/${id}`,data)
  }
  deleteProduct(id:any){
    return this._http.delete(`${baseUrl}/${id}`);
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  };
  
}
