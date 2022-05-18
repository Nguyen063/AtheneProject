import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Profile } from '../models/profile';

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
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }

}
