import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl(''),
      roll:new FormControl(''),
      subject:new FormControl(''),
      mark:new FormControl('')
    })
  }

}
