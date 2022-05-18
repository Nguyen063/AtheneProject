import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { LearnerProfile } from '../models/for-student';

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ForStudentService {
  constructor(private _http: HttpClient) { }
  getLearner(): Observable<LearnerProfile[]>{
    return this._http.get<LearnerProfile[]>(`${baseUrl}/learner`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  
}
