import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Profile } from '../models/profile';
import { Tutor } from '../models/tutor'

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }
  getProfiles(): Observable<Profile[]>{
    return this._http.get<Profile[]>(`${baseUrl}/profiles`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getTutor():Observable<Tutor[]>{
    return this._http.get<Tutor[]>(`${baseUrl}/Tutor`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }

}
