function combine(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

const CombineAges = combine(20, 30);
console.log(CombineAges);

const CombineName = combine('Max', 'Anna'); //  error -> 이렇게 매개변수에 지정한 타입과 맞지 않으면 error를 발생시킨다. 두 가지 타입 모두를 허용하고 싶으면 어떻게 하면 좋을까?