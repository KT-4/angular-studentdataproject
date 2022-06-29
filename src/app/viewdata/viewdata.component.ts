import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  students:any = []
  Onestudent:any
  constructor() { }


  viewStudent(){
     this.Onestudent
  }

  ngOnInit(): void {
  }

}
