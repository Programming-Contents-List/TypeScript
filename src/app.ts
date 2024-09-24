// interface를 왜 사용할까 단순히 Type을 지정하기 위함인가?
// 그렇다면 type Person과 같이 정의하면 문제 없지 않은가?
// 이렇게사용을 해도 문제 없이 동작을한다. 하지만 분명한 차이점이 있다.
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// 분명한 차이점
// type을 사용해서 유니온타입과 같이 커스텀하면 분명 유연할 수는 있지만 인터페이스를 사용하면 훨신 명확해진다는 장점이 있다.
// - 인터페이스로 정의하면 객체의 구조를 정의하고자 한다는 것을 명확하게 나타낼 수 있다. 따라서 객체의 타입으로 정의, 커스텀 타입을 사용하기 보다는 인터페이스를 자주 사용한다.
// - 클래스 안에 인터페이스를 구현할 수 있다. 즉, 클래스로 사용하는 문법으로도 인터페이스를 정의할 수 있다는 장점이 있다. 즉, interface로 extends, override와 같이 상송 구조로 공유성을 확보할 수 있으며 클래스인 implements를 사용해서 클래스와 연동, 혼용이 가능하다.

// 미묘한 차이점
// 
interface GreetAble {
  name: string;
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