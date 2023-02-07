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
  studentInfo: string[] = ['Jaan', 'Peeter', 'Oss'];

  // @ts-ignore
  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Kristel', 'Talimaa', 26, 5, 'Java'));
    students.push(new Student('Sander', 'Hintsov', 26, 5, 'Phyton'));

    return students;
  }

  teachers: Teacher [] = [];
  teacherInfo: string[] = ['Mati', 'Kati', 'Lembit'];

  // @ts-ignore
  fetchTeachers(): Teacher[] {
    let teachers: Teacher[] = [];

    teachers.push(new Teacher('Vinod', 'John', 30, 'vinod@gmail.com', 'Java'));
    teachers.push(new Teacher('Uche', 'Ahun', 29, 'uche@gmail.com', 'Phyton'));

    return teachers;
  }

  addStudent() {
    let studentFirstName = this.studentInfo.at(Math.floor(Math.random() * this.studentInfo.length));
    // @ts-ignore
    this.students.push(new Student(studentFirstName, 'Maasikas', 25, 4, 'Java'));
  }

  addTeacher() {
    let teacherFirstName = this.teacherInfo.at(Math.floor(Math.random() * this.teacherInfo.length));
    // @ts-ignore
    this.teachers.push(new Teacher(teacherFirstName, 'Karis', 45, 'alarkaris@gmail.com', 'Phyton'));
  }

}
