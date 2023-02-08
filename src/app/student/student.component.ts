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

  addStudent() {
    let studentFirstName = this.studentInfo.at(Math.floor(Math.random() * this.studentInfo.length));
    let studentLastName = this.studentInfoLastName.at(Math.floor(Math.random() * this.studentInfoLastName.length));
    // @ts-ignore
    this.students.push(new Student(studentFirstName, studentLastName, 25, 4, 'Java'));
  }
}
