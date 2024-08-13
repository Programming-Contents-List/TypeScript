import { Add, isAdult } from "./utils/data.interface";

//일반 함수

// function test(x, y): Add {
//   return x + y;
// } //-> 잘못된 일반 함수 선언 방법

function test(x: number, y: number): number {
  return x + y;
}

const addTest: Add = test;
//왜 function에 인터페이스를 지정 할 수 없는가?
//TypeScript에서 함수 타입 인터페이스를 직접 함수 선언에 기입하는 것은 불가능


//익명 함수
const add: Add = function (x, y) {
  return x + y;
}

console.log(add(10, 20));

//화살표 함수
const isAdult: isAdult = (age) => {
  return age > 19;
}

console.log(isAdult(20));