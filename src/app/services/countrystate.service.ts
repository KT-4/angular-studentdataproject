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

   getState(countryId:String){
    return this.http.get(`${environment.apiUrl}/state?country_id=${countryId}`)
   }

   getCity(stateId:String){
     return this.http.get(`${environment.apiUrl}/city?state_id=${stateId}`)
   }
  

}
