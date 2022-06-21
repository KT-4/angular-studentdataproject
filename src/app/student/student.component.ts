import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any = []
  Onestudent:any
  dstudent:any 

  constructor(public studentService:StudentService,private route:ActivatedRoute,private router:Router) { }
 
  ngOnInit(): void {
    this.studentService.getStudent().subscribe((res:any) => {
      this.students = res
   })
  }

  form= new FormGroup({
    name:new FormControl('',Validators.required),
    roll:new FormControl('',Validators.required),
    subject:new FormControl('',Validators.required),
    marks:new FormControl('',Validators.required)
  })
   
  submit(){
    console.log(this.form.value)
    this.studentService.createNewStudent(this.form.value).subscribe((res)=>{
      console.log(res)
      alert('studnet added')
    })
    
  }


    getStudent(){
     
    }

    viewStudent(ids:any){
      this.studentService.getStudentById(ids).subscribe((data:any)=>{
        this.Onestudent = data
      })
    }

    deleteStudent(iddelete:any){
      this.studentService.deleteStudentById(iddelete).subscribe((deletedata:any)=>{
        this.dstudent = deletedata
      })
    }

   
}
