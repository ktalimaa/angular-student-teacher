import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Student} from '../shared/models/Student';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() studentTitle = '';
  students: Student[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'grade',
    'subject',
  ];
  @ViewChild(MatTable) table!: MatTable<Student>;

  studentInfo: string[] = ['Harry', 'Peter', 'Oliver', 'James', 'Will'];
  studentInfoLastName: string[] = ['Potter', 'Miller', 'Smith', 'Jones', 'Davis'];
  studentInfoAge: number[] = [23, 24, 25, 26, 27];
  studentInfoGrade: number[] = [3, 4, 5];
  studentInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];

  initializeData() {
    for (let i = 0; i < 1; i++) {
      const newStudent: Student = {
        firstName: 'First name ' + (i + 1),
        lastName: 'Last name ' + (i + 1),
        age: 18 + i,
        grade: Math.floor(Math.random() * 5) + 1,
        subject: 'Subject ' + (i + 1)
      };
      this.students.push(newStudent);
    }
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
    this.table.renderRows();
  }

  removeData() {
    this.students.pop();

    this.table.renderRows();
  }

  ngOnInit(): void {
    this.initializeData();
  }
}
