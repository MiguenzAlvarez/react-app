import { Person } from "./person";

export class Teacher extends Person {
  constructor(name, degree) {
    super(name); //call the father constructor
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
