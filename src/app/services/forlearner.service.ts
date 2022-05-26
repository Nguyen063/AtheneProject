import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Learner } from '../models/learner';



const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ForlearnerService {

  constructor(private _http: HttpClient) { }
  getLearner(): Observable<Learner[]>{
    return this._http.get<Learner[]>(`${baseUrl}/learners`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }
 
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  
}
