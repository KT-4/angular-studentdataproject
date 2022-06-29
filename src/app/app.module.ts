import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ViewdataComponent,
    SubjectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
