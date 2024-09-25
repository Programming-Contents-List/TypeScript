interface Named {
  readonly name?: string;
  outputName?: string; //선택적 프로퍼티 만들기 이렇게 선택적 프로퍼티를 생성하면 undefined로 정의된다.
}

interface AddFn {
  (a: number, b: number): number;
}

interface GreetAble extends Named {
  greet(phrase: string): void;
}

class Person implements GreetAble {
  name?: string;
  age: number;
  constructor(N: number, n?: string) {
    // 선택적 매개변수는 필수 요소인 매개변수 뒤에 있을 수 없다.
    //뿐만아니라 선택적 매개변수 n이 name과 직결되는 매개변수이기에 해당 매개변수가 선택적 매개변수로 변경된다면 error가 발생할 것이다. 이유는 앞서 말했듯 n은 name과 직결되기에 필수 객체인 name또한 선택적 객체 죽, 선택적 프로퍼티로 변경해줘야 정상적으로 동작한다.
    if (n) {
      this.name = n;
    }
    this.age = N;
  }
  greet(phrase: string): void {
    //앞서말했지만 선택 프로퍼티로 설정되면 기본 undefined로 설정이 되기 때문에 해당 갓이 존재할 경우(즉, undefined가 아닌경우) 해당 log가  동작하게 검수할 수 있는 조건문을 생성해야한다.
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    }
    else {
      console.log('Hi!');
    }
  }
}

let user1: GreetAble;

user1 = new Person(26, 'Mike');

// user1 = {
//   name: "Mike",
//   age: 26,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

user1.greet('Hi there - I am');

console.log(user1);