import { Benz, Car } from "./utils/data.interface";

//클래스 : 객체의 행동과 구조를 정의하기에 '='을 사용한다.
class Bmw implements Car {
  color = '';
  constructor(color: string) {
    this.color = color;
  }
  wheels = 4;
  start() {
    console.log('go..');
  }
}

const b = new Bmw('white');
console.log(b);
b.start();

//extends
//객체 리터럴 : 객체를 리터럴해야하기 때문에 key, value 값으로 정의하게 되고 클래스와 달리 '='를 사용해야 한다.
const benz: Benz = {
  color: 'black',
  wheels: 4,
  start() {
    console.log('go...');
  },
  door: 5,
  stop() {
    console.log('stop...');
  },
}