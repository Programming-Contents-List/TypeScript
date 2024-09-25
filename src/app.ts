interface Named {
  readonly name: string;
}

interface GreetAble extends Named {
  greet(phrase: string): void;
}

class Person implements GreetAble {
  name: string;  //주석 처리하면 error발생
  age: number;
  constructor(n: string, N: number) {
    this.name = n;  // error ts(2339): name이 Person에서 구현되지 않았다고 error
    // 그렇다면 왜 name과 관련된 GreatAble을 상속 받고 있는데 에러가 발생할까?
    // 이유는 GreetAble에서 상속받은 Named의 필드 변수는 readonly로 필수적으로 class에서 name 속성을 반드시 포함을 해야한다.
    // 다시 클래스에 관해서 상기시키자면 class는 청사진이다. interface는 abstract와는 달리 강행성이 없지만
    // implements와 extends차이
    // extends는 클래스에서 클래스로 상속을 줄 때 이고 implements는 인터페이스를 클래스로 명세서를 받아 올 수 있는 방법이다. 정리하자면
    // extends는 클래스 또는 인터페이스 간의 상속 관계를 나타내며 상위 클래스나 인터페이스의 속성과 메서드를 상속받아 사용할 수 있다.
    // implements는 클래스가 인터페이스를 구현하도록 강제하며 인터페이스에서 정의된 모든 속성과 메서드를 구현해야 한다.
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