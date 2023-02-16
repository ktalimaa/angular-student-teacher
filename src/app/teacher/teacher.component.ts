import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Teacher} from "../shared/models/Teacher";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacherTitle: string = '';


  teachers: Teacher[] = [];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'email',
    'subject',
  ];
  @ViewChild(MatTable) table!: MatTable<Teacher>;

  teacherInfo: string[] = ['Martin', 'Thomas', 'Robert', 'Carl', 'Kevin'];
  teacherInfoLastName: string[] = ['Walker', 'Brown', 'White', 'Williams', 'Jackson'];
  teacherInfoAge: number[] = [30, 31, 32, 33];
  teacherInfoEmail: string[] = ['university@gmail.com', 'sda@gmail.com', 'teacher@gmail.com'];
  teacherInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];

  initializeData() {
    for (let i = 0; i < 1; i++) {
      const newTeacher: Teacher = {
        firstName: 'First Name ' + (i + 1),
        lastName: 'Last Name ' + (i + 1),
        age: 18 + i,
        email: 'Email ' + (i + 1),
        subject: 'Subject ' + (i + 1)
      };
      this.teachers.push(newTeacher);
    }
  }

  addData() {
    const randomIndex = Math.floor(Math.random() * this.teacherInfo.length);
    const randomIndexLastname = Math.floor(Math.random() * this.teacherInfoLastName.length);
    const randomIndexAge = Math.floor(Math.random() * this.teacherInfoAge.length);
    const randomIndexGrade = Math.floor(Math.random() * this.teacherInfoEmail.length);
    const randomIndexSubject = Math.floor(Math.random() * this.teacherInfoSubject.length);

    const newTeacher = new Teacher(
      // this.students.length + 1,
      this.teacherInfo[randomIndex],
      this.teacherInfoLastName[randomIndexLastname],
      this.teacherInfoAge[randomIndexAge],
      this.teacherInfoEmail[randomIndexGrade],
      this.teacherInfoSubject[randomIndexSubject]
    );

    this.teachers.push(newTeacher);
    console.log(this.teachers);
    this.table.renderRows();
  }

  removeData() {
    this.teachers.pop();

    this.table.renderRows();
  }

  ngOnInit(): void {
    this.initializeData();
  }


  // addTeacher() {
  //   let teacherFirstName = this.teacherInfo.at(Math.floor(Math.random() * this.teacherInfo.length));
  //   let teacherLastName = this.teacherInfoLastName.at(Math.floor(Math.random() * this.teacherInfoLastName.length));
  //   let teacherAge = this.teacherInfoAge.at(Math.floor(Math.random() * this.teacherInfoAge.length));
  //   let teacherEmail = this.teacherInfoEmail.at(Math.floor(Math.random() * this.teacherInfoEmail.length));
  //   let teacherSubject = this.teacherInfoSubject.at(Math.floor(Math.random() * this.teacherInfoSubject.length));
  //   // @ts-ignore
  //   this.teachers.push(new Teacher(teacherFirstName, teacherLastName, teacherAge, teacherEmail, teacherSubject));
  // }
}
