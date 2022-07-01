import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrystateService {

  apiBaseUrl = 'http://localhost/dev/tcxapp/';

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(`${this.apiBaseUrl}api/countries`)
  }

  getStatus(countryId:number){
    return this.http.get(`${this.apiBaseUrl}api/states/${countryId}`)
  }

  getCities(stateId:number){
    return this.http.get(`${this.apiBaseUrl}api/cities/${stateId}`)
  }

}
