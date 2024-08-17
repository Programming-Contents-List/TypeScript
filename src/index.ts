// Generic : 클래스나 타입을 재사용하기 위한 문법

// union이 아닌 제네릭 <T>사용하기
// 여기서 T는 임의의 타입을 나타내는 변수이다. 제네릭 함수가 호출될 때 T는 실제 타입으로 대체된다.
//따라서 이 함수에서 T는 배열(T[])의 요소 타입을 나타내며 호출 시점에 이 타입이 구체적으로 결정된다.

function getSize<T>(arr: T[]): number {
  return arr.length;
}

// number Type
// number로 지정된 타입을 사용할 수도 있지만 유니온을 사용해서 여러 타입을 지정 할수도 있다.
const arr1 = [1, 2, '3'];
getSize<number | string>(arr1);

// string Type
const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

// boolean Type
const arr3 = [false, true, true];
getSize<boolean>(arr3);

// object Type
const arr4 = [{}, {}, { name: 'Time' }];
getSize<object>(arr4);