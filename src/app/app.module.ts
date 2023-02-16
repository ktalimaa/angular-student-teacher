import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import {TeacherFormComponent} from './teacher/teacher-form/teacher-form.component';
import {StudentFormComponent} from './student/student-form/student-form.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {TeacherModule} from "./teacher/teacher.module";
import {StudentModule} from "./student/student.module";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'student-table',
    component: StudentComponent
  },
  {
    path: 'student-form',
    component: StudentFormComponent
  },
  {
    path: 'teacher-table',
    component: TeacherComponent
  },
  {
    path: 'teacher-form',
    component: TeacherFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    TeacherFormComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    TeacherModule,
    StudentModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
