import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/models/Student";
import {Teacher} from "./shared/models/Teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.students = this.fetchStudents();
    this.teachers = this.fetchTeachers();
  }

  title = 'Students and teachers exercise';

  toShow = true;

  students: Student [] = [];

  studentTitle = 'List of students';
  teacherTitle = 'List of teachers';

  // @ts-ignore
  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Kristel', 'Talimaa', 26, 5, 'Java'));
    students.push(new Student('Sander', 'Hintsov', 26, 5, 'Phyton'));

    return students;
  }

  teachers: Teacher [] = [];

  // @ts-ignore
  fetchTeachers(): Teacher[] {
    let teachers: Teacher[] = [];

    teachers.push(new Teacher('Vinod', 'John', 30, 'vinod@gmail.com', 'Java'));
    teachers.push(new Teacher('Uche', 'Ahun', 29, 'uche@gmail.com', 'Phyton'));

    return teachers;
  }

  // should do the same with age, grade and subject also like with names, add it to teacher too
}
