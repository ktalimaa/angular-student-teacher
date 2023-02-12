import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../shared/models/Teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacherTitle: string = '';
  @Input() teachers: Teacher[] = [];

  ngOnInit(): void {
  }

  teacherInfo: string[] = ['Mati', 'Kati', 'Lembit'];
  teacherInfoLastName: string[] = ['Mets', 'Kask', 'Lepp'];
  teacherInfoAge: number[] = [30, 35, 45];
  teacherInfoEmail: string[] = ['university@gmail.com', 'sda@gmail.com', 'teacher@gmail.com'];
  teacherInfoSubject: string[] = ['Java', 'Python', 'C++', 'JavaScript'];


  addTeacher() {
    let teacherFirstName = this.teacherInfo.at(Math.floor(Math.random() * this.teacherInfo.length));
    let teacherLastName = this.teacherInfoLastName.at(Math.floor(Math.random() * this.teacherInfoLastName.length));
    let teacherAge = this.teacherInfoAge.at(Math.floor(Math.random() * this.teacherInfoAge.length));
    let teacherEmail = this.teacherInfoEmail.at(Math.floor(Math.random() * this.teacherInfoEmail.length));
    let teacherSubject = this.teacherInfoSubject.at(Math.floor(Math.random() * this.teacherInfoSubject.length));
    // @ts-ignore
    this.teachers.push(new Teacher(teacherFirstName, teacherLastName, teacherAge, teacherEmail, teacherSubject));
  }
}
