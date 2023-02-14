import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Student } from '../shared/models/Student';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() studentTitle = '';
  students: Student[] = [];
  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'age',
    'grade',
    'subject',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource();

  @ViewChild(MatTable) table!: MatTable<Student>;

  studentInfo: string[] = ['Jaan', 'Peeter', 'Oss'];
  studentInfoLastName: string[] = ['Jaani', 'Pets', 'Orav'];
  studentInfoAge: number[] = [23, 24, 25];
  studentInfoGrade: number[] = [4, 5];
  studentInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];

  initializeData() {
    for (let i = 0; i < 10; i++) {
      const newStudent: Student = {
        // position: i + 1,
        firstName: 'Student ' + (i + 1),
        lastName: 'Last Name ' + (i + 1),
        age: 18 + i,
        grade: Math.floor(Math.random() * 5) + 1,
        subject: 'Subject ' + (i + 1)
      };
      this.students.push(newStudent);
    }
    this.dataSource.data = this.students;
    this.table.renderRows();
  }

  addData() {
    const randomIndex = Math.floor(Math.random() * this.studentInfo.length);
    const randomIndexLastname = Math.floor(Math.random() * this.studentInfoLastName.length);
    const randomIndexAge = Math.floor(Math.random() * this.studentInfoAge.length);
    const randomIndexGrade = Math.floor(Math.random() * this.studentInfoGrade.length);
    const randomIndexSubject = Math.floor(Math.random() * this.studentInfoSubject.length);

    const newStudent = new Student(
      // this.students.length + 1,
      this.studentInfo[randomIndex],
      this.studentInfoLastName[randomIndexLastname],
      this.studentInfoAge[randomIndexAge],
      this.studentInfoGrade[randomIndexGrade],
      this.studentInfoSubject[randomIndexSubject]
    );

    this.students.push(newStudent);
    console.log(this.students);
    this.dataSource.data = this.students;
    this.table.renderRows();
  }

  removeData() {
    this.students.pop();
    this.dataSource.data = this.students;
    this.table.renderRows();
  }

  ngOnInit(): void {
    this.dataSource.data = this.students;
  }
}






// import {Component, Input, OnInit} from '@angular/core';
// import {Student} from "../shared/models/Student";
//
// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.css']
// })
// export class StudentComponent implements OnInit {
//
//   @Input() studentTitle: string = '';
//   @Input() students: Student[] = [];
//
//   ngOnInit(): void {
//   }
//
//   studentInfo: string[] = ['Jaan', 'Peeter', 'Oss'];
//   studentInfoLastName: string[] = ['Jaani', 'Pets', 'Orav'];
//   studentInfoAge: number[] = [23, 24, 25];
//   studentInfoGrade: number[] = [4, 5];
//   studentInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];
//
//   addStudent() {
//     let studentFirstName = this.studentInfo.at(Math.floor(Math.random() * this.studentInfo.length));
//     let studentLastName = this.studentInfoLastName.at(Math.floor(Math.random() * this.studentInfoLastName.length));
//     let studentAge = this.studentInfoAge.at(Math.floor(Math.random() * this.studentInfoAge.length));
//     let studentGrade = this.studentInfoGrade.at(Math.floor(Math.random() * this.studentInfoGrade.length));
//     let studentSubject = this.studentInfoSubject.at(Math.floor(Math.random() * this.studentInfoGrade.length));
//     // @ts-ignore
//     this.students.push(new Student(studentFirstName, studentLastName, studentAge, studentGrade, studentSubject));
//   }
// }
