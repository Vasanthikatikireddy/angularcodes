import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentTodoComponent } from './student-todo/student-todo.component';

const routes: Routes = [
  { path: 'studentform', component: StudentFormComponent},
  { path :'studentlist', component: StudentListComponent },
  { path : 'studenttodo', component: StudentTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[StudentFormComponent, StudentListComponent, StudentTodoComponent]
