//함수 void, never

//void: void는 반환되는 값이 없을 때이다.
function sayHello(): void {
  console.log('hello');
}

//never : never는 항상 error를 반환하거나 영원히 끝나지 않는 무한loop일 때 사용한다.
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    //do something...
  }
}