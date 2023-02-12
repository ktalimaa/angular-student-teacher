import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/models/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() studentTitle: string = '';
  @Input() students: Student[] = [];

  ngOnInit(): void {
  }

  studentInfo: string[] = ['Jaan', 'Peeter', 'Oss'];
  studentInfoLastName: string[] = ['Jaani', 'Pets', 'Orav'];
  studentInfoAge: number[] = [23, 24, 25];
  studentInfoGrade: number[] = [4, 5];
  studentInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];

  addStudent() {
    let studentFirstName = this.studentInfo.at(Math.floor(Math.random() * this.studentInfo.length));
    let studentLastName = this.studentInfoLastName.at(Math.floor(Math.random() * this.studentInfoLastName.length));
    let studentAge = this.studentInfoAge.at(Math.floor(Math.random() * this.studentInfoAge.length));
    let studentGrade = this.studentInfoGrade.at(Math.floor(Math.random() * this.studentInfoGrade.length));
    let studentSubject = this.studentInfoSubject.at(Math.floor(Math.random() * this.studentInfoGrade.length));
    // @ts-ignore
    this.students.push(new Student(studentFirstName, studentLastName, studentAge, studentGrade, studentSubject));
  }
}
