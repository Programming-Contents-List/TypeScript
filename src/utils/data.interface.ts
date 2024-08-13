export interface userType {
  name: string,
  age: number,
  // 뒤에 "?"가 있는 것은 옵셔널로 gender를 입력을 해도 되고 안해도 되는 방식이다.
  gender?: string,
  readonly birthYear: number,
  //key value 방식의 인덱스 시그니처 (프로퍼티) 선언
  [grade: number]: string;
}

//grade를 문자열로 선언하기에는 너무 광범위하다. 그래서 이를 문자열 리터럴 방식으로 타입을 하나 선언 해보면 아래와 같다.

type Score = 'A' | 'B' | 'C' | 'F';
//type은 정확히 어떤 것인가?