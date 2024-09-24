interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
//interface는 객체의 구조를 정의한다.
//interface는 대문자로 정의 해야한다.

let user1: Person;

user1 = {
  name: "Mike",
  age: 26,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');