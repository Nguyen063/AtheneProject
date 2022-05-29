import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Profile } from '../models/profile';
import { Tutor } from '../models/tutor'

const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile= new Profile();
  profiles: any;

  constructor(private _http: HttpClient, private _service: ProfileService) { }
  ngOnInit(): void {
   
    this.getProfiles()
  }
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
  postProfile(data: Profile){
    return this._http.post(`${baseUrl}/profile`,data);
  }
  updateProfile(id:any,data:any){
    return this._http.patch(`${baseUrl}/${id}`,data)
  }

}
