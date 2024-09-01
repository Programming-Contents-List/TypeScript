function combine(n1: number | string, n2: number | string) {
  const result = n1 + n2; //  error -> '+' 연산자를 'string | number' 및 'string | number' 형식에 적용할 수 없습니다.ts(2365) 이러한 에러가 발생한다. 
  //발생 원인 : TS가 타입추론을 하는데 문제가 발생하는 것이다. 각 매개변수가 여러 타입을 지정을 받았는데 연산을 사용할 수 없는 타입이 있을지 모르기 때문이다. 이를 어떻게 해결할 수 있을꺄?
  return result;
}
// Ts가 염려하는 error의 근원은 아래와 같다.
const b1: boolean = true;
const b2: boolean = false;
console.log(b1 + b2);

const CombineAges = combine(20, 30);
console.log(CombineAges);

const CombineName = combine('Max', 'Anna');

