import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  createNewStudent(studentData:string){
    return this.http.post(`${environment.apiUrl}/student`,studentData)
  }

  getStudent(){
     return this.http.get(`${environment.apiUrl}`)
  }

  getStudentById(id:string){
    return this.http.get<any>(`${environment.apiUrl}/student/${id}`)
  }

  updateStudentById(id:string,studentData:any){
    return this.http.patch<any>(`${environment.apiUrl}/student/${id}`,studentData)
  }

  deleteStudentById(id:string){
    return this.http.delete<any>(`${environment.apiUrl}/student/${id}`)
  }

}
