import { json } from "react-router-dom";
import { JoinUser, User } from "./utils/data.interface";

// 함수
function add(num1: number, num2: number) {
  // return num1 + num2;
  console.log(num1 + num2);
}

function isAdult(age: number): boolean {
  return age > 19;
}

// '?' : 옵셔널 파라메터 - 선택적 매개변수
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

const result = hello();
const result2 = hello('sam');

function hello2(name = 'world') {
  return `Hello, ${name}`;
}
// 옵셔널 파라메터 특징 - 옵셔널 파라메터는 항상 뒤에 있어야한다. 즉, name 앞에 age?가 있어서는 안된다.
function userInfo(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(userInfo("sam"));
console.log(userInfo("sam", 30));

// 옵셔널 파라매터를 앞에 두고 싶다면 undefined를 유니온 방식으로 사용해야 한다.
function userInfo2(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(userInfo2(30, "sam"));
console.log(userInfo2(undefined, "sam"));

//나머지 연산 함수
//spread 방식은 배열로 값이 리턴 되기 때문에 배열 타입을 지정해야 한다.
function addSpread(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

addSpread(1, 2, 3); //6
addSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

//bind 방식

const Sam: User = { name: 'Sam' }

function showName(this: User, age: number, gender: 'm' | 'f') {//this: User
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, 'm');

//
function join(name: string, age: number): JoinUser; //overload
function join(name: string, age: string): string; //overload

function join(name: string, age: number | string): JoinUser | string {
  if (typeof age === "number") {
    //JoinUser 타입의 리턴 값
    return {
      name,
      age,
    };
  } else {
    //string 타입의 리턴 값
    return "나이는 숫자로 입력해주세요.";
  }
}
//여기서 error 가 나오는 이유는 sam와 jane 변수는 확신이 없다. JoinUser 또는 string이 리턴 값이기 때문이다.
// const sam: JoinUser = join("Sam", 30); //error
// const jane: string = join("Jane", "30"); //error
//이럴 때는 overload를 사용해야 한다.

//overload 적용 했을 때의 log값
const sam: JoinUser = join("Sam", 30);
const jane: string = join("Jane", "30");

//overload 강으 부분 다시 들어볼 필요 있음.