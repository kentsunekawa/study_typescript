# class

class は typescript 特有の機能ではないが、typescript を使うことで、  
様々な機能を使うことができる。

## 基本

下記ソースのプロパティの型注釈している部分を フィールド と呼ぶ

```typescript
class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const quill = new Person("Quill");
```

## method

```typescript
class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}
```

this の型注釈で class 名を使用

## 修飾子

**修飾子一覧**

- public → どこからでも読み書き可
- private → その class 内から読み書き可
- protected → その class 内と継承先の class 内からのみ読み書き可

```typescript
class Person {
  public name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  private incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}
```

## 初期化の省略

フィールドを削除して、コンストラクタ関数の引数で型注釈（修飾子必須）

```typescript
class Person {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}
```

## readonly

アクセス修飾子の前につける  
readonly でもコンストラクタ関数の中では初期化できる  
readonly を付ければアクセス修飾子は省略できる

```typescript
class Person {
  readonly id: number = 32;
  constructor(public readonly name: string, private age: number) {
    this.name = name;
    this.age = age;
    this.id = 22;
  }
}
```

## 継承

extends 　
継承した class のコンストラクタ関数の中では super() を実行する  
継承した先で呼び出したいメンバーの修飾子は protected にする  
readonly は継承先でも呼び出せる

```typescript
class Person {
  constructor(public readonly name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`
    );
  }
}
```

## ゲッター・セッター

初期化はプロパティ名の前に \_ （アンダーバー）をつける  
セッターとゲッターは関数でありながら、プロパティのようにアクセスできる

```typescript
class Teacher {
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject");
    }
    return this._subject;
  }

  set subject(value) {
    if (!value) {
      throw new Error("There is no subject");
    }
    this._subject = value;
  }

  constructor(
    public name: string,
    private age: number,
    public _subject: string
  ) {
    this.name = name;
    this.age = age;
    this.subject = _subject;
  }
}
// インスタンス化
const teacher = new Teacher("Quill", 38, "Math");
// セッターで値をセット
teacher.subject = "Music";
// ゲッターで値をゲット
console.log(teacher.subject);
```

## static

インスタンスを生成せずに使える class のメソッド

```typescript
class Person {
  static species = "Homo Sapiens";
  static isAdoult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(readonly name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}

console.log(Person.species);
console.log(Person.isAdoult(40));
```

## abstruct

継承専用の class  
abstruct class はインスタンスを生成できない（継承のみ化）  
継承先の class では必ず abstruct メソッドを定義しないといけない

```typescript
abstract class Person {
  constructor(public name: string, protected age: number) {}

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  explainJob() {
    console.log(`I teach ${this.subject}`);
  }
  private constructor(name: string, age: number, private subject: string) {
    super(name, age);
    this.subject = subject;
  }
}
```

## singleton パターン

デザインパターンの一種  
一度だけしかインスタンスを生成できない class  
コンストラクタ関数を private で封じる

```typescript
class Teacher {
  private static instance: Teacher;

  private constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  static getInstance(name: string, age: number) {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher(name, age);
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance("Quill", 38);
console.log(teacher);
```
