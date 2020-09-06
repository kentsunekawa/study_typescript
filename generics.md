# generics

型を引数のように受け取ることができる

## 基本

```typescript
function copy<T>(value: T): T {
  return value;
}
console.log(copy({ name: "Quill" }));
```

## 型パラメータに制約

```typescript
function copy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy({ name: "Quill" }));
```

## keyof 演算子

```typescript
function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  console.log(value[key]);
  return value;
}
console.log(copy({ name: "Quill", age: 38 }, "age"));
```

## class に generics

```typescript
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
```

## interface に generics

```typescript
interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const TmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};
```

## Utility 型は型のライブラリ

```typescript
interface Todo {
  title: string;
  text: string;
}

type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;
```

Partial という定義済の generics  
Readonly という定義済の generics

```typescript
const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
```

Promise 型に型パラメータで string を渡している  
これをしないと、 data が string 型と認識されず unknown 型になってしまう

```typescript
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];
```

Array 型に型パラメータで string を渡している例

##

```typescript
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}

let tmp: ResponseData;
```

## MappedTypes

型の for 文

```typescript
type MappedTypes = {
  [P in "tomato" | "pumpkin"]: P;
};
```

```typescript
interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}

type MappedTypes = {
  [P in keyof Vegetables]: P;
};
```

```typescript
type MappedTypes<T> = {
  [P in keyof T]: P;
};
```

```typescript
type MappedTypes<T> = {
  -readonly [P in keyof T]?: P;
};
```

## Conditional Types

型の if 文

```typescript
type ConditionalTypes = "tomato" extends string ? number : boolean;
```

'tomato' 型が string 型に代入できるのであれば number。 できなければ boolean  
三項演算子のようなもの

```typescript
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
```

```typescript
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp: DistributiveConditionalTypes<"tomato" | "pumpkin">;
```

```typescript
let tmp: NonNullable<string | null>;
```

Utility 型
