interface Named {
  readonly name: string;
}

// interface는 객체의 구조를 정의하는데 사용된다.(각 객체들의 Type 명세서)
/* type 함수 커스텀 방식 */
// type AddFn = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// }

/* interface 함수 커스텀 방식 */
// 사실 여기선 type 커스텀 방식을 사용하는 것이 일반적이다.

interface AddFn {  //익명함수
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

// custom function type과 interface function의 차이
// 함수 타입 커스텀 방식과 인터페이스에서 함수 정의는 모두 함수의 타입을 명시하는 방법이다. 이 두 방식은 서로 유사해 보이지만 사용 목적과 적절한 상황에 따라 선택해야 한다.

//custom function type
//  타입 별칭(type)을 사용해서 함수를 정의하는 방식은 단순한 함수 시그니처를 정의할 때 주로 사용된다. 함수의 인자와 반환 타입을 정의하고 이를 타입으로 재사용할 수 있다.
// * 적절한 사용 시기:
//  단순한 함수의 시그니처를 정의하고 싶을 때 적합
//  객체 형태가 아닌 독립적인 함수 타입을 정의해야 할 때 유용
//  함수가 단순한 인자와 반환 값만을 가지고 있고, 추가적인 속성이 필요하지 않은 경우에 좋다.
// * 필요 목적:
//  여러 함수가 동일한 시그니처를 가질 때 반복 없이 함수 타입을 정의할 수 있다.
//  함수 자체를 타입으로 처리할 때 유용합니다.예를 들어 고차 함수(재귀함수)에서 함수 타입을 인자로(event) 받을 때 명확하게 함수 시그니처를 지정할 수 있습니다.

//interface function
//  인터페이스에서 함수를 정의하는 방식은 객체의 일부로 함수를 다룰 때 주로 사용된다. 인터페이스를 사용하여 구조적인 객체를 정의하고, 그 안에 함수를 포함시킬 수 있다.
// * 적절한 사용 시기:
//  함수가 객체의 일부로 정의될 때, 즉 속성, 메서드, 함수가 함께 복합적으로 존재하는 구조적 정의가 필요할 때 사용
//  객체의 구조를 정의하면서 여러 메서드나 속성이 포함될 때 적합
// * 필요 목적:
//  함수가 객체의 일부분으로 사용될 때, 속성이나 다른 메서드와 함께 관리할 수 있는 명확한 구조를 제공해야 할 때
//  구조적 객체 설계를 강제하고 여러 메서드를 포함하는 객체의 형태를 명확히 정의해야 할 때


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