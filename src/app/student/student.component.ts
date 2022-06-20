import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any
  Onestudent:any
  form!:FormGroup
  editData!:FormGroup
   id:any
  constructor(public studentService:StudentService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    
    // this.form = new FormGroup({
    //     name:new FormControl(''),
    //     roll:new FormControl(''),
    //     subject:new FormControl('')
    // })

    this.viewStudent(this.id)
    this.getStudent()
  }

   
  // createStudent(){
  //   this.studentService.createNewStudent(this.form.value).subscribe((res)=>{
  //     console.log(res)
  //   })
  // }


    getStudent(){
      this.studentService.getStudent().subscribe((res) => {
        this.students = res
        console.log(res)
     })
    }

    viewStudent(ids:any){
      this.id = ids
      console.log()
      this.studentService.getStudentById(this.id).subscribe((data:any)=>{
        this.Onestudent = data
      })
    }

   
}
