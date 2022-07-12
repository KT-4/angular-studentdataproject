import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  // onFileChange(event:any){
  //   const file = event.target.files[0]
  //   console.log(file)

  //  const formData = new FormData
  //  formData.append('file',file)

  //   this.http.post(`${environment.apiUrl}/file`,formData).subscribe((d)=>{
  //     console.log(d)
  //   },error=>console.log(error))
  // }
   
  onFileChangemultipule(event:any){
    
  }
    
  
}
