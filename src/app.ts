function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ', +num);
}

printResult(add(1, 2));

// let result: Function;  //일반적인 방식으로 함수 타입을 할당한 경우
let result: (a: number, b: number) => number;  // 화살표기로 함수의 반환 값까지 할당한 경우
result = add;
//result = printResult; // error ts(2322) -> 'void' 형식은 'number' 형식에 할당할 수 없습니다.
// 해당 오류는 result의 타입은 number로 반환되는 함수여야만 가능하기 때문이다. 즉, printResult는 void가 반환이기 때문에 오류가 발생한다.
// result = 0; //값이 재할당 되면서 0으로 값이 출력된다.
console.log(result(1, 2));  // 그렇다면 result 변수에 함수 타입을 지정하면 되지 않을까?