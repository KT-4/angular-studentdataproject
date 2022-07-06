import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountrystateService {

  constructor(private http:HttpClient) { }
 
   getCountry(){
    return this.http.get(`${environment.apiUrl}/country`)
   }

   getState(){
    return this.http.get(`${environment.apiUrl}/state`)
   }

   getCity(){
     return this.http.get(`${environment.apiUrl}/city`)
   }
  

}
