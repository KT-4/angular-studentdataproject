import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  Addstudent:any
  id:any

  constructor(public studentService:StudentService,private route:ActivatedRoute,private router:Router) { }
 
  ngOnInit(): void {
  this.getStudnets()
  this.id = this.route.snapshot.params['id'];
  this.studentService.getStudentById(this.id).subscribe((data:any)=>{
    this.students = data;
  })
  
   
  }

  form= new FormGroup({
    name:new FormControl('',Validators.required),
    roll:new FormControl('',Validators.required),
      //subject:new FormControl('',Validators.required)
    
  })
  subform = new FormGroup({
    subject:new FormControl([],Validators.required),
    marks:new FormControl([],Validators.required)
  })

  editForm = new FormGroup({
    name:new FormControl('',Validators.required),
    roll:new FormControl('',Validators.required),

  })

  getStudnets(){
    this.studentService.getStudent().subscribe((res:any) => {
      this.students = res
   })
  }
  
  submit(){
    console.log(this.form.value)
    this.studentService.createNewStudent(this.form.value).subscribe((res)=>{
      console.log(res)
      alert('studnet added')
    })
    
  }




    viewStudent(ids:any){
      this.studentService.getStudentById(ids).subscribe((data:any)=>{
        this.Onestudent = data
      })
    }

    deleteStudent(idDelete:any){
      this.studentService.deleteStudentById(idDelete).subscribe((res:any)=>{
          // this.students = this.students.filter((data:any)=>{
          //   data._id != idDelete
          // })
          // alert('delete successfully')
          this.getStudnets()
      })
    }


    //  addData(){
    //   // console.log(this.form.value)
    //   // this.studentService.createNewStudent(this.form.value).subscribe((markdata)=>{
    //   //   console.log(markdata)
    //   //   alert('studnet added')
    //   // })
    // }
     
    addData(markid:any){
       this.studentService.getStudentById(markid).subscribe((data:any)=>{
        this.Addstudent = data
     })
     
     
      // this.studentService.createNewStudent(this.subform.value).subscribe((subjectData)=>{
      // console.log(subjectData)
      // alert('subject added')
      // })
   }

   subStudent(){
    console.log(this.subform.value)
   }

   edit(){
     console.log(this.editForm.value)
     this.studentService.updateStudentById(this.id,this.editForm.value).subscribe(updateres =>{
       console.log(updateres)
     })
   }
   
}
