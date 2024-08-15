//접근 제한자(Access modifier) - public, private, protected / es6에서는 접근 제한자를 지원하지 않았다 하지만 ts에서는 제공해준다.

abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
  }
  abstract doSomething(): string; //아무 작업을 하지 않은 추상 함수 상속받은 클래스에 해당 함수가 없다면 error 발생
}

// const Car = new Car("red"); //-> error : 추상클래스는 new 인스턴스로 생성할 수 없다. 추상클래스는 청사진과 같다고 생각하며 된다. 따라서 오로지 상속을 통해서만 가능하다.

class Bmw extends Car {
  constructor(color: string) {
    super(color);
    // 참고로 'super()'는 부모(일반적인 super가 아님)의 constructor에 접근
  }
  // abstract doSomething()가 없다면 class는 error, 즉, 추상 클래스는 상속을 받은 쪽에서 해당 함수를 사용해야 한다.
  doSomething(): string {
    // alert("do!"); //-> error : alert는 browser에서만 사용이 가능
    console.log("do!");
    return 'Do!';
  }
  // - private: 부모 name이 private인 경우 error가 나온다. 추가적으로 '#name'은 private로 인식한다.
  // - protected: 부모 name이 protected인 경우 정상 동작한다. 그렇다면 public과 차이는 무엇인가.
  /*
    * new를 통해서 인스턴스 했을 경우 접근을 제한하게 된다. 즉, 자식 클래스에서는 부모 속성에 접근을 할 수 있으나 new 인스턴스인 경우 접근이 불가하다.
  */
  // - readonly: new 인스턴스를 통해서 값을 변경할 수 없다. 그렇다면 어떻게 해야 변경을 할 수 있을까?
  /*
    * 부모 constructor 내부에서 작업을 해야한다. 
  */
  // - static: static은 정적 맴버 변수(property)를 만들어 줄 수 있다. static에 접근을 하기 위해서는 this가 아닌 class 이름으로 접근을 해야 한다.
  // - abstract: abstract은 추상 클래스(class) 또는 함수, 변수를 만들어 준다.
}

const z4 = new Bmw("black");
console.log(z4.doSomething());  //undefined가 출력되는 이유 : doSomething의 반환 값이 void이기 때문이다.