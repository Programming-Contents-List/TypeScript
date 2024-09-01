//항상 유니온 타입을 지정하는 것은 많이 번거롭다. 이에 alias 타입으로 사용자 지정 타입을 정할 수 있다. 즉, 타입을 우리가 다로 별칭으로 만들어 낼 수 있다.

type Combinable = number;

function combine(
  n1: Combinable | string,
  n2: Combinable | string,
  resultConversion: 'as-number' | 'as-text',
) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
    result = +n1 + +n2;
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

const combineAges = combine(20, 30, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('20', '30', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
