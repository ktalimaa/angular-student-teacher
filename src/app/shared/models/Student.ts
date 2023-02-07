export class Student {

  firstName: string;
  lastName: string;
  age: number;
  grade: number;
  subject: string;

  constructor(firstName: string, lastName: string, age: number, grade: number, subject: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grade = grade;
    this.subject = subject;
  }
}
