abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

  constructor(public name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    return this._subject;
  }
  set subject(value) {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    this._subject = value;
  }
  explainJob() {
    console.log(`I teach ${this.subject}`);
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance(name: string, age: number, subject: string) {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher(name, age, subject);
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance("Quill", 38, "Math");
console.log(teacher);

teacher.greeting();
