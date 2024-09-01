function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: 'as-number' | 'as-text', // 이렇게 타입을 지정할 수도 있지만 리터럴 타입을 직접 지정할 수 있다.
) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
    result = +n1 + +n2; //error ts(2365) -> n1, n2외 다른 인자 추가되면서 조건문에서의 논리적 흐름이 충분히 명확하지 않아 발생할 수 있다. 따라서 이 코드에서 TypeScript는 n1과 n2가 string 타입일 가능성이 있다고 판단, 인자들을 사용할 때 더 명확한 타입을 요구 따라 '+'를 추가함, 이는 리터럴 타입과는 무관하다.
  } else if (typeof n1 === 'string' && typeof n2 === 'string') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}
// 리터럴 타입이란? 리터럴 타입은 특정 변수나 어떤 타입이어야 하는지 정의하는게 아니다. 단진 정확히 어떤 값인지 정의하는 것이다. 이를 확인하기 위해서는 마우스를 원하는 값에 호버하면 반환되는 값이 무엇인지 확인이 된다. Ts는 알아갈 수록 점점 타입들을 구체적으로 좁혀가는 것으로 보인다.
const combineAges = combine(20, 30, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('20', '30', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
