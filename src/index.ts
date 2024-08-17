// Generic : 클래스나 타입을 재사용하기 위한 문법
// 여러개의 타입을 사용하려면 '유니온 타입' 또는 '오버로드'를 사용한다.

function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  return arr.length;
}

// number Type
const arr1 = [1, 2, 3];
getSize(arr1);  //3

// string Type
const arr2 = ["a", "b", "c"];
getSize(arr2);  //3

//하지만 이보다 더 여러개의 타입을 지정하거나 사용 해야한다면 어떻게 해야할까? 유니온 타입으로 모두 다 지정하는 것은 너무 가독성이 떨어진다.

// boolean Type
const arr3 = [false, true, true];
getSize(arr3);

// object Type
const arr4 = [{}, {}, { name: 'Time' }];
getSize(arr4);