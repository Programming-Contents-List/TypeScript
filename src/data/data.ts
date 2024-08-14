import { userType } from '../utils/data.interface'

export const arrNumber = [2, 6, 3, 6, 5];
export const arrString = ['1'];

//이 둘은 같은 타입이다. 타입을 따로 지정하지 않으면 string으로 기본값을 가진다. - 타입 추론
let element_1: string = 'bmw';
let element_2 = 'bmw';

const element = {
  age: 30,
  isAdult: true,
  a: [1, 2, 3],
  a2: [1, 2, 3],
}

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// export let user: object; //object로 선언되어 있지만 name을 참고하게 되면 user에 name이 없다고 나오면서 특정 속성값이 없다는 에러가 나온다.

export let user: userType = {
  name: 'dongwoo',
  age: 30,
  birthYear: 2000,
  // 오로지 score에서 정해진 정의만 사용이 가능하다.
  1: 'A',
  2: 'B',
  3: 'A',
}