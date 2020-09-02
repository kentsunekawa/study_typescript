# 発展編

## intersection

〇〇かつ ××

```typescript
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};
```

```typescript
interface EngineerBlogger extends Engineer, Blogger {}
```

interface にして継承も可

```typescript
type tmp = string & number;
```

これは文字列かつ数字存在しないので never 型になる

```typescript
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;
```

union 型と union 形の　 intersection 型の例

## type guard

type gurad は TypeScript 特有のものではない。

**typeof**

```typescript
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
}
```

**in**

```typescript
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }

  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
```

key がオブジェクトの中に存在するか

**instanceof**

```typescript
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
```

オブジェクトがある特定の class の instance かどうか調べる

## 型アサーション

型を「これ」だと言い切る

```typescript
const input = document.getElementById("input") as HTMLInputElement;
if (input) {
  input.value = "";
}
```

```typescript
const input = <HTMLInputElement>document.getElementById("input");
if (input) {
  input.value = "";
}
```

これでも可

# non null assersion

!をつけることで null じゃないと言い切る

```typescript
const input2 = document.querySelector("input")!;
```

## index signature

オブジェクトにあとでメンバーを追加できてしまう

```typescript
interface Designer {
  name: string;
  [key: string]: string;
}
const designer: Designer = {
  name: "Quill",
  role: "web",
};
```

## 関数の overrode

関数の、この引数の時の返り値はこれ、って指定する

```typescript
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: any): any;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

console.log(toUpperCase("hello"));
console.log(toUpperCase(5));
console.log(toUpperCase(true));
```

関数の、この引数の時の返り値はこれ、って指定する場合

```typescript
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: any): any;
function toUpperCase(x: string | number): string | number {
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
```

# optional chaining

undefined かもしれないもののプロパティにアクセスするとき  
? をつけることでエラー回避

```typescript
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
```

## nullish coalesing

undefined と null の時のみ false になる三項演算子みたいなもの

```typescript
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const userData = downloadedData.user ?? "no-user";
```

## lookup 型

オブジェクトの下層の型にアクセス

```typescript
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
type id1 = DownloadedData["id"];
type name = DownloadedData["user"]["name"];
type idOfUser = DownloadedData["id" | "user"];
```

## 関数の intersection 型

overrode した関数全てに適応した関数にする必要がある

```typescript
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
```

## 関数の union 型

```typescript
interface FuncA {
  (a: number): number;
}
interface FuncB {}

let unionFunc: FuncA | FuncB;
unionFunc = function (a: number) {
  return 32;
};
unionFunc(32);
```

## レストパラメータ

```typescript
function advancedFn(...args: readonly [number, string, boolean?, ...number[]]) {
  console.log(args[0]);
}
advancedFn(0, "aa", true, 3, 4, 5);
```

## const assersion

```typescript
let milk = "milk" as const;
let drink = milk;

const array = [10, 20] as const;

const peter = {
  name: "Peter",
  age: 38,
} as const;
```

## 値を型として使う
```typescript
const peter = {
  name: "Peter",
  age: 38,
} as const;

type PeterType = typeof peter;
```


