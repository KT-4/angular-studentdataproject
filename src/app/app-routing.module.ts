import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';

import { StudentComponent } from './student/student.component';



const routes: Routes = [
 {path:'',component:StudentComponent},
 {path:'file',component:FileComponent},
 {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
