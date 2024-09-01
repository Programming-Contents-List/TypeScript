function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else if (typeof n1 === 'string' && typeof n2 === 'string') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  } // 해결 방법: if문으로 typeof로 각 타입들이 무엇인지 식별한 후 연산을 적용한다. 연산이 적용되지 않는 타입들은 모두 string으로 형변환 후 연산을 시켜주면 된다. 따라서 유니온 타입으로 여러 타입을 유연하게 사용할 수 있지만 이것들을 활용할 때는 정확히 어떤 타입을 받는지에 관한 로직이 보통 함수나 클래스 구조에 많이 필요하다.
  return result;
}
// Ts가 염려하는 error의 근원은 아래와 같다.
// const b1: boolean = true;
// const b2: boolean = false;
// console.log(b1 + b2);

const CombineAges = combine(20, 30);
console.log(CombineAges);

const CombineNames = combine('Max', 'Anna');
console.log(CombineNames);
