function add(n1: number, n2: number): number {
  return n1 + n2; //error ts(2322) 'number' 형식은 'string' 형식에 할당할 수 없습니다.
} //현재 return에 정의한 n1+n2로 인해서 add함수의 반환 타입은 Number이다. 만약 toSting으로 형변환을 한 `n1.toString() + n2.toString()`일 경우 반환된 값은 string으로 타입이 반환 될 것이다.

function printResult(num: number | string | undefined): void {
  if (typeof num === 'number' || typeof num === 'string') {
    console.log('Result: ', +num);
  } else {
    console.log('this is Undefined!');
  }
} //일반적으로 함수의 반환 타입을 정하지 않으면 void로 판단한다. `:void`를 명시하지 않아도 해당 함수에 마우스를 호버하면 void로 판별 되어 있는 것을 확인 할 수 있다. 따라서 굳이 void를 명시할 필요는 없다.

//반환되지 않는 함수를 기준으로 log로 확인을 해보면 어떤 결과가 나올까
console.log(printResult(add(5, 12))); //결과적으로 `undefined`라는 결과가 나온다. 반환된 값이 없기 때문에 정의되지 않은 박스만 출력이 되는 것이다. 참고로 `undefined`는 값이 없는게 아니라 값을 담아내고 있는 박스에 아무것도 담겨 있지 않다는 의미의 `값`이다. 즉, 비어 있는 박스를 출력한 것이다.

let UndefinedValue: undefined;  //변수로 undefined라는 타입을 지정할 수는 있다. 하지만 함수에서는 undefined라는 타입을 할당 하면 안된다. 반환값이 없는 함수를 출력하면 undefined가 출력되는데 이는 함수의 활용과 의미가 상실하게 된다.

function UndefinedFunction(value: string): undefined {
  console.log(value);
  // return value; //error ts(2322) -> 'string' 형식은 'undefined' 형식에 할당할 수 없습니다
  return; //결과적으로 함수에 아무것도 없는 return이여야 undefined가 된다.
}

printResult(UndefinedFunction('test'));