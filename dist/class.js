"use strict";
let Person = /** @class */ (() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        static isAdult(age) {
            if (age > 17)
                return true;
            return false;
        }
        incrementAge() {
            this.age += 1;
        }
        greeting() {
            console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
            this.explainJob();
        }
    }
    Person.species = "Homo sapiens";
    return Person;
})();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
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
    static getInstance(name, age, subject) {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher(name, age, subject);
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance("Quill", 38, "Math");
console.log(teacher);
teacher.greeting();
