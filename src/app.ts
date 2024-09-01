function add(n1: number, n2: number) {
  return n1 + n2;
} //현재 return에 정의한 n1+n2로 인해서 add함수의 반환 타입은 Number이다. 만약 toSting으로 형변환을 한 `n1.toString() + n2.toString()`일 경우 반환된 값은 string으로 타입이 반환 될 것이다.