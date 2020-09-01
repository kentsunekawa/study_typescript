// decorator

// class をデコレーションする
// class を定義した時に実行される関数

// class decorator
// property decorator
// method decorator
// accessor decorator
// parameter decorator

// ---------------------------------------

// 基本

// function Logging(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logging
// class User {
//   name = "Quill";
//   constructor() {
//     console.log("User was created");
//   }
// }

// const user1 = new User();

// ---------------------------------------

// decorator factory
// decorator を返す関数
// decorator に引数を渡したい場合

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// @Logging("Logging User")
// class User {
//   name = "Quill";
//   constructor() {
//     console.log("User was created");
//   }
// }

// const user1 = new User();

// ---------------------------------------

// テンプレートフレームワークのような例
// angular のような

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function (constructor: { new (...args: any[]): { name: string } }) {
//     const mountedElement = document.querySelector(selector);
//     const instance = new constructor();
//     if (mountedElement) {
//       mountedElement.innerHTML = template;
//       mountedElement.querySelector("h1")!.textContent = instance.name;
//     }
//   };
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   name = "Quill";
//   constructor() {
//     console.log("User was created");
//   }
// }

// const user1 = new User();

// ------------------------------------------------

// class decorator の中で新しい class を return し、
// 新しい class を作っている例

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.querySelector(selector);
//         const instance = new constructor();
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent = instance.name;
//         }
//       }
//     };
//   };
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   name = "Quill";
//   constructor(public age: number) {
//     console.log("User was created");
//   }
// }

// const user1 = new User(32);

// ------------------------------------------------

// property decorator
// class の property を decorate する
// 引数は2つ

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.querySelector(selector);
//         const instance = new constructor();
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent = instance.name;
//         }
//       }
//     };
//   };
// }

// function PropertyLogging(target: any, propertyKey: string) {
//   console.log("property logging");
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   @PropertyLogging
//   name = "Quill";
//   constructor(public age: number) {
//     console.log("User was created");
//   }
// }

// const user1 = new User(32);

// ----------------------------------------------------------

// method decorator
// class の method を decorator する

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.querySelector(selector);
//         const instance = new constructor();
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent = instance.name;
//         }
//       }
//     };
//   };
// }

// function PropertyLogging(target: any, propertyKey: string) {
//   console.log("property logging");
// }

// function MethodLogging(
//   target: any,
//   propertyKey: string,
//   desctiptor: PropertyDescriptor
// ) {
//   console.log("method logging");
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   @PropertyLogging
//   name = "Quill";
//   constructor(public age: number) {
//     console.log("User was created");
//   }
//   @MethodLogging
//   greeting() {
//     console.log("hello!");
//   }
// }

// const user1 = new User(32);

// ----------------------------------------------------------

// accessor decorator
// アクセサ宣言 を decorator する

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.querySelector(selector);
//         const instance = new constructor();
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent = instance.name;
//         }
//       }
//     };
//   };
// }

// function PropertyLogging(target: any, propertyKey: string) {
//   console.log("property logging");
// }

// function MethodLogging(
//   target: any,
//   propertyKey: string,
//   desctiptor: PropertyDescriptor
// ) {
//   console.log("method logging");
// }
// function AccessorLogging(
//   target: any,
//   propertyKey: string,
//   desctiptor: PropertyDescriptor
// ) {
//   console.log("accessor logging");
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   @PropertyLogging
//   name = "Quill";
//   constructor(private _age: number) {
//     console.log("User was created");
//   }
//   @AccessorLogging
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     this._age = value;
//   }
//   @MethodLogging
//   greeting() {
//     console.log("hello!");
//   }
// }

// const user1 = new User(32);

// -----------------------------------------------------

// accessor decorator の例
// enumerable を設定できる decorator を実装している

// function Logging(message: string) {
//   return function (constructor: Function) {
//     console.log(message);
//     console.log(constructor);
//   };
// }

// function Component(template: string, selector: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.querySelector(selector);
//         const instance = new constructor();
//         if (mountedElement) {
//           mountedElement.innerHTML = template;
//           mountedElement.querySelector("h1")!.textContent = instance.name;
//         }
//       }
//     };
//   };
// }

// function PropertyLogging(target: any, propertyKey: string) {
//   console.log("property logging");
// }

// function MethodLogging(
//   target: any,
//   propertyKey: string,
//   desctiptor: PropertyDescriptor
// ) {
//   console.log("method logging");
// }

// function enumerable(isEnumerable: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     desctiptor: PropertyDescriptor
//   ) {
//     return {
//       enumerable: isEnumerable,
//     };
//   };
// }
// function AccessorLogging(
//   target: any,
//   propertyKey: string,
//   desctiptor: PropertyDescriptor
// ) {
//   console.log("accessor logging");
// }

// @Component("<h1>{{ name }}</h1>", "#app")
// @Logging("Logging User")
// class User {
//   @PropertyLogging
//   name = "Quill";
//   constructor(private _age: number) {
//     console.log("User was created");
//   }
//   @AccessorLogging
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     this._age = value;
//   }
//   @enumerable(false)
//   @MethodLogging
//   greeting() {
//     console.log("hello!");
//   }
// }

// const user1 = new User(32);

// --------------------------------------------------------

// parameter decorator

function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Component(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("property logging");
}

function MethodLogging(
  target: any,
  propertyKey: string,
  desctiptor: PropertyDescriptor
) {
  console.log("method logging");
}

function enumerable(isEnumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    desctiptor: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}
function AccessorLogging(
  target: any,
  propertyKey: string,
  desctiptor: PropertyDescriptor
) {
  console.log("accessor logging");
}

function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("parameter logging");
}

@Component("<h1>{{ name }}</h1>", "#app")
@Logging("Logging User")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }
}

const user1 = new User(32);
