// intersection --------------------------
// 〇〇かつ□□

type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
// type EngineerBlogger = Engineer & Blogger;

interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// -------------------------------------------------

// type guard -----------------------------------------
// taged union ----------------------------------------------

// typeof

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
}

// in

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }

  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

// instanceof

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havPet(pet: Pet) {
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
const input = <HTMLInputElement>document.getElementById("input");
if (input) {
  input.value = "";
}

// -------------------------------------------------------------

// non null assersion
// ! をつけることで null じゃ無いと言い切る

const input2 = document.querySelector("input")!;
input2.value = "aaaaaaaaaaaaa";

// -------------------------------------------------------------

// index signature
// オブジェクトにあとでメンバーを追加できてしまう
// 注意が必要

interface Designer {
  name: string;
  [key: string]: string;
}
const designer: Designer = {
  name: "Quill",
  role: "web",
};

// -------------------------------------------------------------

// overrode
// 関数の、この引数の時の返り値はこれ、って指定する

function toUpperCase2(x: string): string;
function toUpperCase2(x: number): number;
function toUpperCase2(x: any): any;
function toUpperCase2(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

console.log(toUpperCase2("hello"));
console.log(toUpperCase2(5));
console.log(toUpperCase2(true));

// -------------------------------------------------------------

// optional chaining
// undefined かもしれないもののプロパティにアクセスするとき
// ? をつけることでエラー回避

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);

// -------------------------------------------------------------

// nullish coalesing
// undefined と null の時のみ false になる三項演算子みたいなもの

const userData = downloadedData.user ?? "no-user";

// -------------------------------------------------------------

// lookup 型
// オブジェクトの下層の型にアクセス

// type id = DownloadedData["id"];
// type id = DownloadedData["user"]["name"];
type id = DownloadedData["id" | "user"];

// -------------------------------------------------------------

// overrode 続き
// 関数の、この引数の時の返り値はこれ、って指定する

function toUpperCase3(x: string): string;
function toUpperCase3(x: number): number;
function toUpperCase3(x: any): any;
function toUpperCase3(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

interface TmpFunc {
  (x: string): number;
  (x: number): number;
}

const upperHello: TmpFunc = function (x: string | number) {
  return 0;
};

// -------------------------------------------------------------

// 関数の intersection 型
// overrode した関数全てに適応した関数にする必要がある

interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}

let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

// -------------------------------------------------------------

// 関数の union 型

interface FuncC {
  (a: number): number;
}
interface FuncD {
  (a: string): number;
}

let unionFunc: FuncC | FuncD;
// let unionFunc: (a: never) => number;
unionFunc = function (a: number) {
  return 32;
};
unionFunc(32);

// ----------------------------------------------------------------

// レストパラメータ

function advancedFn(...args: readonly [number, string, boolean?, ...number[]]) {
  console.log(args[0]);
}
advancedFn(0, "aa", true, 3, 4, 5);

// ----------------------------------------------------------------

// const assersion

let milk = "milk" as const;
let drink = milk;

const array = [10, 20] as const;
const peter = {
  name: "Peter",
  age: 38,
} as const;

// ----------------------------------------------------------------

// 型の中でtypeof
// typeof のあとで値を入れる

type PeterType = typeof peter;
