import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
    
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, AfterViewInit {
  @ViewChild(StudentListComponent) studentListComponent!: StudentListComponent 
  
  StuDemo!: FormGroup;  
  stuArray : any= []; 
  Submitted: boolean=false; 
  constructor( private fb: FormBuilder) { } 

  ngAfterViewInit(): void {
  }
  public confirm(): void{
    this.Submitted=true;
    console.log(this.StuDemo.value)
    this.stuArray.push(this.StuDemo.value);
    this.StuDemo.reset();
    console.log(this.stuArray);
  }

  ngOnInit() {
    this.StuDemo = this.fb.group({
      'Name': [''],
      'Mobile': [''],
      'gender': [],
      'country': [],

    });
  }

    displayStyle = "none";

    openPopup(){

      this.displayStyle = "block";
    }
    closePopup(){
      this.displayStyle = "none";
    }
}




