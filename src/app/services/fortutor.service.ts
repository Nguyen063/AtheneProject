import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Tutor } from '../models/tutor';

const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class FortutorService {

  constructor(private _http: HttpClient) { }
  getTutors(): Observable<Tutor[]>{
    return this._http.get<Tutor[]>(`${baseUrl}/tutors`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  
}
