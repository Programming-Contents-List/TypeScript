//접근 제한자(Access modifier) - public, private, protected / es6에서는 접근 제한자를 지원하지 않았다 하지만 ts에서는 제공해준다.

class Car {
  name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    // console.log(super.name); //-> error 이유는 super는 부모 클래스 메서드를 호출 할 때 사용된다. 부모 속성에 접근하려면 this를 사용해야 한다. 즉, constructor에서 사용한 방식과 달리 this를 사용해야한다. 이미 extends Car를 상속받고 있기 때문이다.
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
  }
}

const z4 = new Bmw("black");
console.log(z4.name);
z4.name = "test";