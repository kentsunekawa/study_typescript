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

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());

// ----------------------------------------------

// interface に generics

interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const TmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

// ----------------------------------------------

// Utility 型は型のライブラリ

interface Todo {
  title: string;
  text: string;
}

// Partial という定義済の generics
type Todoable = Partial<Todo>;
// Readonly という定義済の generics
type ReadTodo = Readonly<Todo>;

// Promise 型に型パラメータで string を渡しているs
// これをしないと、 data が unknown 型になってしまう
const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});

// Array 型に型パラメータで string を渡している例
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

// ----------------------------------------------

// 型パラメータのデフォルト値の設定

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}

let tmp: ResponseData;

// ----------------------------------------------

// MappedTypes
// 型の for 文

// 基本形
type MappedTypes01 = {
  [P in "tomato" | "pumpkin"]: P;
};

interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}

type MappedTypes02 = {
  [P in keyof Vegetables]: P;
};

type MappedTypes03<T> = {
  [P in keyof T]: P;
};

type MappedTypes04<T> = {
  -readonly [P in keyof T]?: P;
};

// Utility 型は MappedTpes が内部的に使われている

// ----------------------------------------------

// Conditional Types
// 型の if 文

type ConditionalTypes = "tomato" extends string ? number : boolean;
// 'tomato' 型が string 型に代入できるのであれば number。 できなければ boolean
// 三項演算子のようなもの

// 以下かなり発展の内容--
//  (こんなんいつ使うねん？) → Utility 型で内部的に使われているらしい

type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;

type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;

let tmp5: NonNullable<string | null>;

// ----------------------------------------------
