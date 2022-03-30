import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentTodoComponent } from './student-todo/student-todo.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentTodoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
   
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
