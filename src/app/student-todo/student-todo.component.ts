import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-todo',
  templateUrl: './student-todo.component.html',
  styleUrls: ['./student-todo.component.css']
})
export class StudentTodoComponent implements OnInit {
  items: any[]= [];
  newTask!:any;
  data!:any;
  Submitted!: boolean;
  isComplete: any;
  check: any[]=[];
  x!: string;

  
  constructor() { }
  public addToList() {
    if (this.newTask == '') {
    }
    else {
        this.items.push(this.newTask);
        this.newTask = '';
        console.log(this.newTask.value);
        this.displayStyle = "none";
    }
 }

 public confirm(): void{
  this.Submitted=true;
 }

  ngOnInit(): void {
  }

  displayStyle = "none";

    openPopup(){

      this.displayStyle = "block";
    }
    
    checkValue(event: any,x: any,index: any){
      console.log(event.target.checked);
      this.check.push(x); 
      this.items.splice(index, 1);
    }
  
    public deleteTask(index: any,x:any) {
      this.items.splice(index, 1);
      
  }
    public editTask(index: any,x: any): void {
    this.check.splice(index, 1);
    this.items.push(x);

  }

}


