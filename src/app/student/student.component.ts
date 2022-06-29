import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  public students:any = []
  public Onestudent:any
  public Addstudent:any
  public editStudentd:any
  public id:any
  form!:FormGroup
  editForm!:FormGroup

  constructor(private studentService:StudentService,private fb:FormBuilder) {}

   ngOnInit(): void{
    
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      roll:new FormControl('',Validators.required),
      subject:new FormArray([]),
      marks: new FormArray([])
      
    })
  
    this.editForm = this.fb.group({
        name:new FormControl('',Validators.required), 
        roll:new FormControl('',Validators.required),
        subject:new FormArray([]),
        marks: new FormArray([])
    })

    this.getStudnets()
    console.log("Get All Student")

    
  }

  // patchValue(ids){
  //   this.editForm.patchValue({
  //     this.ids
  //     this.editStudent.subject
  //   })
  // }

// get all student
getStudnets(){
  this.studentService.getStudent().subscribe((res) => {
    this.students = res
  })
}

// view Student
viewStudent(ids:any){
  this.studentService.getStudentById(ids).subscribe((data)=>{
    this.Onestudent = data
  })
}

// delete sutdent
deleteStudent(idDelete:any){
  this.studentService.deleteStudentById(idDelete).subscribe((res)=>{
      // this.getStudnets()
  })
}

// add new studnet



onAddStuAndMark(){
  var scontrol = new FormControl(null, [Validators.required]);
  var mcontrol = new FormControl(null, [Validators.required]);
  
  (<FormArray>this.form.get('subject')).push(scontrol);
  (<FormArray>this.form.get('marks')).push(mcontrol)
}

get SubControls(){
  return (<FormArray>this.form.get('subject')).controls
  
}
get markControls(){
  return (<FormArray>this.form.get('marks')).controls
}

submit(){
  this.studentService.createNewStudent(this.form.value).subscribe(res=>{
  })
  alert('Student Added')
  this.form.reset()
}

// edit sutdent

edditAadd(){
  var escontrol = new FormControl(null, [Validators.required]);
  var emcontrol = new FormControl(null, [Validators.required]);

  // (<FormArray>this.editForm.get('subject')).push(escontrol);
  // (<FormArray>this.editForm.get('marks')).push(emcontrol)
}

 editStudent(idu:any){
  this.id = idu
  this.studentService.getStudentById(idu).subscribe((data)=>{
  this.editStudentd = data
   
  })
 }

 edit(){
  this.studentService.updateStudentById(this.id,this.editForm.value).subscribe((res)=>{
    console.log(res)
    alert(`update successfully`)
  })
}
   
}
