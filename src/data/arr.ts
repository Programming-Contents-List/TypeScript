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