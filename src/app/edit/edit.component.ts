import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editData!:FormGroup
  
  constructor() { }

  ngOnInit(): void {
     this.editData = new FormGroup({
       name:new FormControl(''),
       roll:new FormControl(''),
       subject:new FormControl(''),
       mark:new FormControl('')
     })
  }

}
