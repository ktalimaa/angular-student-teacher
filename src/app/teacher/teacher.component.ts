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
  addTeacher() {
    let teacherFirstName = this.teacherInfo.at(Math.floor(Math.random() * this.teacherInfo.length));
    // @ts-ignore
    this.teachers.push(new Teacher(teacherFirstName, 'Karis', 45, 'alarkaris@gmail.com', 'Phyton'));
  }
}
