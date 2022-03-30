import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTodoComponent } from './student-todo.component';

describe('StudentTodoComponent', () => {
  let component: StudentTodoComponent;
  let fixture: ComponentFixture<StudentTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
