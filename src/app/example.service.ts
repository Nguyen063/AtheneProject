import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IBlog } from './interfaces/blogs';
import { Blog } from './models/blog';


const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IBlog[]>{
    return this._http.get<IBlog[]>(`${baseUrl}/blog`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  postProduct(data: Blog){
return this._http.post(`${baseUrl}/blog`,data)
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
