interface Named {
  readonly name: string;
}

interface AddFn {
  (a: number, b: number): number;
}

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