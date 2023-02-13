import {Component} from '@angular/core';
import {Student} from "../shared/models/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  students: Student[] = [];
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  grade: string = '';
  subject: string = '';
  isShowForm: boolean = false;

  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.firstName, this.lastName, +this.age, +this.grade, this.subject));
    studentForm.reset();
}

  showStudentForm() {
    this.isShowForm = true;
  }
}
