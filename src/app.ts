// interface는 객체의 구조를 정의하는데 사용된다.(각 객체들의 Type 명세서)
/* type 함수 커스텀 방식 */
// type AddFn = (a: number, b: number) => number;

// interface Named {
//   readonly name: string;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// }

interface GreetAble extends Named {
  greet(phrase: string): void;
}

class Person implements GreetAble {
  name: string;
  age: number;
  constructor(n: string, N: number) {
    this.name = n;
    this.age = N;
  }
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: GreetAble;

user1 = new Person('Mike', 26);

// user1 = {
//   name: "Mike",
//   age: 26,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

user1.greet('Hi there - I am');

console.log(user1);