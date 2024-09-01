function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ', +num);
}

printResult(add(1, 2));

let result: Function;
result = add;
result = printResult; //이렇게 재할당을 할 경우 undefined를 출력한다. 이유는 printResult의 값이 void이기 때문이다.
// result = 0; //값이 재할당 되면서 0으로 값이 출력된다.
console.log(result(1, 2));  //그렇다면 result 변수에 함수 타입을 지정하면 되지 않을까?