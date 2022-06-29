import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  
  createNewSubject(subjectData:any){
    return this.http.post(`${environment.apiUrl}/subject`,subjectData)
  }

  
  getSubject(){
    return this.http.get(`${environment.apiUrl}/subject`)
  }
  
  getSingleSubject(id:string){
    return this.http.get<any>(`${environment.apiUrl}/subject/${id}`)
  }

  updateSubjectById(id:string,subjectData:string){
    return this.http.patch<any>(`${environment.apiUrl}/subject/${id}`,subjectData)
  }

  deleteSubjectById(id:string){
    return this.http.delete<any>(`${environment.apiUrl}/subject/${id}`)
  }
}
