import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { ViewdataComponent } from './viewdata/viewdata.component';


const routes: Routes = [
 {path:'',component:StudentComponent},
 {path:'view',component:ViewdataComponent},
 
 {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
