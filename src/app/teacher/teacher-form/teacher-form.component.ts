import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Teacher} from "../../shared/models/Teacher";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  teachers: Teacher[] = [];
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  email: string = '';
  subject: string = '';
  isShowForm: boolean = true;

  addTeacher(teacherForm: NgForm) {
    this.teachers.push(new Teacher(this.firstName, this.lastName, +this.age, this.email, this.subject));
    teacherForm.reset();
  }

  showTeacherForm() {
    this.isShowForm = true;
  }
}
