
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CountrystateService } from '../services/countrystate.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  public students?:any = []
  public Onestudent:any
  public Addstudent:any
  public editStudentd:any
  public id:any
  createButton = false
  updateButton = false
  form!:FormGroup;
  public uploadFiles:any
  editForm!:FormGroup
  countries:any;
  states:any;
  cities:any;
  myCountry:any
  myState:any
  myCity:any

  constructor(private studentService:StudentService,private countryservice:CountrystateService,private fb:FormBuilder,private http:HttpClient) {}

   ngOnInit(): void{
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      roll:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      file:new FormControl('',[Validators.required]),
      
      subject:new FormArray([
        new FormControl(null, [Validators.required]),
      ]),
      marks: new FormArray([
        new FormControl(null, [Validators.required]),
      ]),
    })
    this.getStudnets()
    this.getCountry() 
  }

 //File Upload
 
 onFileChange(event:any){
  const file = event.target.files[0]
  console.log(file)

 const formData = new FormData
 formData.append('file',file)

  this.http.post(`${environment.apiUrl}/file`,formData).subscribe((d)=>{
    console.log(d)
  },error=>console.log(error))
}




//  submitFile(){   
//  }


//<--------------------- Get all student ---------------------->
getStudnets(){
  this.studentService.getStudent().subscribe((res) => {
    this.students = res
    
  })
}

//<----------------- Get All Country ------------------------>


getCountry(){
  this.countryservice.getCountry().subscribe((cres)=>{
    this.countries = cres
 
 })
}



//<--------------- view Student ------------->

async viewStudent(id:any){
  this.Onestudent = await this.studentService.getStudentById(id).toPromise()
    console.log(this.Onestudent)
     this.myCountry = await this.countryservice.getCountry().toPromise()
     this.myState = await this.countryservice.getState(this.Onestudent.country).toPromise()
     this.myCity = await this.countryservice.getCity(this.Onestudent.state).toPromise()

     this.myCountry = this.myCountry.filter((c:any)=>{
       return c.id == this.Onestudent.country
     })

     
     this.myState = this.myState.filter((s:any)=>{
      return s.id == this.Onestudent.state
    })
    console.log(this.myState)
    
    this.myCity = this.myCity.filter((c:any)=>{
      return c.id == this.Onestudent.city
    })
    

    this.Onestudent.country = this.myCountry[0].name;
    this.Onestudent.state = this.myState[0].name;
    this.Onestudent.city = this.myCity[0].name;
}


//<-------------------------- Delete Student ----------------------->

deleteStudent(idDelete:any){
  this.studentService.deleteStudentById(idDelete).subscribe((res)=>{
      this.getStudnets()
  })
}

//<--------------  Push Form Control ------------------>

get SubControls(){

   return (<FormArray>this.form.get('subject')).controls
  
}
get markControls(){
  
  return (<FormArray>this.form.get('marks')).controls
}

onAddStuAndMark(){
  var scontrol = new FormControl(null, [Validators.required]);
  var mcontrol = new FormControl(null, [Validators.required]);
 
  (<FormArray>this.form.get('subject')).push(scontrol);
  (<FormArray>this.form.get('marks')).push(mcontrol)
}

addStudent(){
  this.form.reset()
  this.createButton = true
  this.updateButton = false
  this.states = null
  this.cities =null
}

// edit sutdent
 async editStudent(idu:any){
  this.form.reset()
  this.editStudentd = await this.studentService.getStudentById(idu).toPromise()
  this.createButton = false
  this.updateButton = true
  this.id = idu
  
  let mar:any 
  let sub:any
  this.close()

  if(this.editStudentd.country){
    this.ChangeCountry(this.editStudentd.country)
  }
  if(this.editStudentd.state){
    this.ChaneState(this.editStudentd.state)
  }

    sub = this.editStudentd.subject.map((s:any)=>s.subject)
    
    mar = this.editStudentd.marks.map((e:any)=>e.mark)
    

    for(let i = 0; i< sub.length; i++){
      this.onAddStuAndMark()
    }


    
  
  this.form.patchValue({
    name:this.editStudentd.name , 
    roll:this.editStudentd.roll,
    country:this.editStudentd.country,
    state:this.editStudentd.state,
    city:this.editStudentd.city,
    subject: sub,
    marks: mar
  })

  
 }

//<---------------------  if select state using country ----------------->

ChangeCountry(cid:any){

  if(cid){
    this.countryservice.getState(cid).subscribe((sres)=>{
      this.states = null
      this.states = sres
   })
  }else{
    this.states = null
    this.cities = null
  }
}

//<---------------------  if select city using country ----------------->


ChaneState(sid:any){
 if(sid){
  this.countryservice.getCity(sid).subscribe((ceres)=>{
    this.cities = null
    this.cities = ceres
 })
 }else{
  this.cities = null
 }
}
 close(){
  this.SubControls.splice(0, this.SubControls.length)
  this.markControls.splice(0, this.markControls.length)
 }
 submit(){
 if(this.createButton){
  this.studentService.createNewStudent(this.form.value).subscribe(res=>{
    this.getStudnets()
    const formData = new FormData();
    formData.append('file',this.form.get('fileSource')?.value);
  })
  alert('Student Added')
  this.form.reset()
  this.states = null
  this.cities = null
 }
 if(this.updateButton){
  this.studentService.updateStudentById(this.id,this.form.value).subscribe(res=>{
    this.getStudnets()
    alert('student update succcessfully')
  })
}
}



}
