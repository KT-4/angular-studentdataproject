import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CountrystateService } from '../services/countrystate.service';
// import { Country, State, City }  from 'country-state-city';
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

  
  // public countries:any = []
  form!:FormGroup
  editForm!:FormGroup

   countries:any = [];
   states:any = [];
   cities:any = [];

  constructor(private studentService:StudentService,private countryservice:CountrystateService,private fb:FormBuilder) {}

   ngOnInit(): void{

    
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      roll:new FormControl('',Validators.required),
      subject:new FormArray([]),
      marks: new FormArray([]),
      
      
    })
  
    this.editForm = new FormGroup({
        name:new FormControl('',Validators.required), 
        roll:new FormControl('',Validators.required),
        subject:new FormArray([]),
        marks: new FormArray([]),
        country:new FormControl(''),
        state:new FormControl('')
    })

    this.getStudnets()
    this.getCountries()
     
  }



// get all student
getStudnets(){
  this.studentService.getStudent().subscribe((res) => {
    this.students = res
  })
}

getCountries(){
   this.countryservice.getCountry().subscribe((cres)=>{
       this.countries = cres
   })
}

 onChangeCountry(countryId:String){
   if(countryId){
    this.countryservice.getState().subscribe((sres)=>{
      this.states = sres
   })
   }
    
    
 }

 getCities(){
   this.countryservice.getCity().subscribe((ceres)=>{
      this.cities = ceres
   })
 }

// view Student
viewStudent(ids:any){
  this.studentService.getStudentById(ids).subscribe((data)=>{
    this.Onestudent = data
  })
}


deleteStudent(idDelete:any){
  this.studentService.deleteStudentById(idDelete).subscribe((res)=>{
      this.getStudnets()
  })
}


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
  this.getStudnets()

  alert('Student Added')
  this.form.reset()
}

// edit sutdent

 editStudent(idu:any){
  this.id = idu
  this.studentService.getStudentById(idu).subscribe((data)=>{
  this.editStudentd = data
  })
 }


 get eSubControls(){
  return (<FormArray>this.editForm.get('subject')).controls
 
}
get emarkControls(){
 return (<FormArray>this.editForm.get('marks')).controls
}

 edditAadd(){
  
  var escontrol = new FormControl(null, [Validators.required]);
  var emcontrol = new FormControl(null, [Validators.required]);

  (<FormArray>this.editForm.get('subject')).push(escontrol);
  (<FormArray>this.editForm.get('marks')).push(emcontrol)
}

setValue() {
  this.editForm.setValue({name:this.editStudentd.name , roll:this.editStudentd.roll, subject:this.editStudentd.subject.subject, marks:this.editStudentd.marks.mark });
}


 edit(){
  this.studentService.updateStudentById(this.id, this.editForm.value).subscribe((res)=>{
    console.log(res)
    alert(`update successfully`)
  })
}
   
}
