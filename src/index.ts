//함수 void, never

//void: void는 반환되는 값이 없을 때이다. 즉, 함수가 아무런 값을 반환하지 않음을 나타낸다.
function sayHello(): void {
  console.log('hello');
}

//never : never는 항상 error를 반환하거나 영원히 끝나지 않는 무한loop일 때 사용한다. 즉, 함수가 절대적으로 반환하지 않는 경우에 사용된다.
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    //do something...
  }
}