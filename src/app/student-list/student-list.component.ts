import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
    
  styleUrls : ['./student-list.component.css' ]
})
export class StudentListComponent implements OnInit {

  @Input() stuData: any;
  StuDemo!: FormGroup
  Submitted: boolean=false;
  stuArray: any;
 
  

  constructor(private formBuilder:FormBuilder) { }

  public confirm():void{
    console.log(this.StuDemo.value);
    this.stuArray.push(this.StuDemo.value);
    
  }

  ngOnInit(): void {
    console.log(this.stuData.value);
  }

}
