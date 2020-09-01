"use strict";
// generics
// ----------------------------------------------
// 型を引数として受け取る
// function copy<T>(value: T): T {
//   return value;
// }
// console.log(copy({ name: "Quill" }));
// ----------------------------------------------
// 型パラメータに制約
// function copy<T extends { name: string }>(value: T): T {
//   return value;
// }
// console.log(copy({ name: "Quill" }));
// ----------------------------------------------
// keyof 演算子
// type K = keyof { name: string; age: number };
// function copy<T extends { name: string }, U extends keyof T>(
//   value: T,
//   key: U
// ): T {
//   console.log(value[key]);
//   return value;
// }
// console.log(copy({ name: "Quill", age: 38 }, "age"));
// ----------------------------------------------
// class に generics
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());
