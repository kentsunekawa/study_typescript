"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: "Quill",
};
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: "Quill",
    age: 38,
    experience: 5,
    greeting(message) {
        console.log(message);
    },
};
const user = new Developer(38, 3);
console.log(user.name);
