class Car {
  // color: string; //-> 생성자에서 this를 사용하기 위해서는 사용될 변수 프로퍼티를 먼제 선언 해야한다.
  // 하지만 프로퍼티를 선언하지 않고 사용하는 방법이 public과 readonly를 해당 매개변수에 지정해주면 된다.
  constructor(readonly color: string) {//public
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

const bmw = new Car("red");