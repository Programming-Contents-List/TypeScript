// interface를 왜 사용할까 단순히 Type을 지정하기 위함인가?
// 그렇다면 type Person과 같이 정의하면 문제 없지 않은가?
// 이렇게사용을 해도 문제 없이 동작을한다. 하지만 분명한 차이점이 있다.
type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }


let user1: Person;

user1 = {
  name: "Mike",
  age: 26,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');