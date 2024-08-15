//접근 제한자(Access modifier) - public, private, protected / es6에서는 접근 제한자를 지원하지 않았다 하지만 ts에서는 제공해준다.

class Car {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
    // console.log(this.wheels);  //-> error : this가 아닌 class 이름으로 접근
    console.log(Car.wheels);
  }
}

class Bmw extends Car {
  constructor(color: string, name: string) {
    super(color, name);
    // 참고로 'super()'는 부모(일반적인 super가 아님)의 constructor에 접근
  }
  showName(): void {
    console.log(this.name);
    // - private: 부모 name이 private인 경우 error가 나온다. 추가적으로 '#name'은 private로 인식한다.
    // - protected: 부모 name이 protected인 경우 정상 동작한다. 그렇다면 public과 차이는 무엇인가.
    /*
      * new를 통해서 인스턴스 했을 경우 접근을 제한하게 된다. 즉, 자식 클래스에서는 부모 속성에 접근을 할 수 있으나 new 인스턴스인 경우 접근이 불가하다.
    */
    // - readonly: new 인스턴스를 통해서 값을 변경할 수 없다. 그렇다면 어떻게 해야 변경을 할 수 있을까?
    /*
      * 부모 constructor 내부에서 작업을 해야한다. 
    */
    // - static: static은 정적 맴버 변수를 만들어 줄 수 있다. static에 접근을 하기 위해서는 this가 아닌 class 이름으로 접근을 해야 한다.
  }
}

const z4 = new Bmw("black", "test");
console.log(z4.name);
// z4.name = "test";
// console.log(z4.wheels);  //-> error : this가 아닌 class 이름으로 접근
console.log(Car.wheels);