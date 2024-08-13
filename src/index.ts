//배열 방식 타입 지정

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
//제네릭을 사용해서 Array의 타입을 지정
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// week1.push(3); //-> error 타입이 일치하지 않음