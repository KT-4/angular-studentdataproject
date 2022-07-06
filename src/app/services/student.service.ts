import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// import { Country, State, City }  from 'country-state-city';




@Injectable({
  providedIn: 'root'
})
export class StudentService {

  

  constructor(private http:HttpClient) { }

  createNewStudent(studentData:any){
    return this.http.post(`${environment.apiUrl}/student`,studentData)
  }

  getStudent(){
     return this.http.get(`${environment.apiUrl}/student`)
  }

  getStudentById(id:string){
    return this.http.get(`${environment.apiUrl}/student/${id}`)
  }

  updateStudentById(id:string,studentData:any){
    return this.http.patch(`${environment.apiUrl}/student/${id}`,studentData)
  }

  deleteStudentById(id:string){
    return this.http.delete(`${environment.apiUrl}/student/${id}`)
  }


  //countries get student

  getCountry(){
    return this.http.get(`${environment.apiUrl}/student`)
  }

}
