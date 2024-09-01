function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ', +num);
}

//콜백함수
function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  //cd(result);
  return cd(result);  //return으로 반환 값 설정
}

const test = addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
//콜백함수를 사용하면 어떤 장점이 있는가?
// 함수 안에서 콜백을 전달하면 타입스크립트는 결과가 숫자라는 것을 추론한다. 즉, 해당 함수를 사용할 때 명시적으로 코드를 작성하지 않아도 된다.
console.log(test);  //하지만 이렇게 log를 찍어서 확인을 해보면 아무것도 없는 undefined를 반환한다. 왜냐면 반환 타입을 void로 지정했기 때문이다.
//그렇다면 여기서 드는 의문은 addAndHandle의 void때문일까 아니면 cd의 콜백함수에서 암묵적으로 지정한 void때문일까? 이유는 리터럴 타입을 확인하면 된다. addAndHandle의 반환되는 리터럴 타입은 number이다. 타입을 지정하지 않았기 때문에 암묵적으로 result의 타입을 끌고와서 number로 타입이 지정된다. 따라서 함수 타입을 지정하거나 return값을 지정해주면 undefined가 아닌 정상적인 코드가 출력 될 것이다.

printResult(add(1, 2));

let result: (a: number, b: number) => number;
result = add;
console.log(result(1, 2));
