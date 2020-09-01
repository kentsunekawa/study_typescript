"use strict";
// intersection --------------------------
// 〇〇かつ□□
var _a, _b, _c;
const quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
// -------------------------------------------------
// type guard -----------------------------------------
// taged union ----------------------------------------------
// typeof
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadWorker) {
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
// instanceof
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havPet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// ----------------------------------------------------------
// 型アサーション
// 型をこれだと言い切る
// const input = document.getElementById("input") as HTMLInputElement;
const input = document.getElementById("input");
if (input) {
    input.value = "";
}
// -------------------------------------------------------------
// non null assersion
// ! をつけることで null じゃ無いと言い切る
const input2 = document.querySelector("input");
input2.value = "aaaaaaaaaaaaa";
const designer = {
    name: "Quill",
    role: "web",
};
function toUpperCase2(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
console.log(toUpperCase2("hello"));
console.log(toUpperCase2(5));
console.log(toUpperCase2(true));
const downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// -------------------------------------------------------------
// nullish coalesing
// undefined と null の時のみ false になる三項演算子みたいなもの
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
function toUpperCase3(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) {
    return 0;
};
let intersectionFunc;
intersectionFunc = function (a, b) {
    return 0;
};
let unionFunc;
// let unionFunc: (a: never) => number;
unionFunc = function (a) {
    return 32;
};
unionFunc(32);
// ----------------------------------------------------------------
// レストパラメータ
function advancedFn(...args) {
    console.log(args[0]);
}
advancedFn(0, "aa", true, 3, 4, 5);
// ----------------------------------------------------------------
// const assersion
let milk = "milk";
let drink = milk;
const array = [10, 20];
const peter = {
    name: "Peter",
    age: 38,
};
