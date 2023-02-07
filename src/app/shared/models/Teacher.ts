export class Teacher {

  firstName: string;
  lastName: string;
  age: number;
  email: string;
  subject: string;

  constructor(firstName: string, lastName: string, age: number, email: string, subject: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.subject = subject;
  }
}
