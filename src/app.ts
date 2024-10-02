// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB);
// }

// const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

// const mergeObj2 = merge({ name: 'Max' }, { age: 30 });

// console.log(mergeObj.name);

//interface와 Generics의 조합
interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {  //반환값은 Generics를 사용했기에 타입추론이되지만 명확하게 명시를 해줘야한다면 현재와같이 작성하면 된다.
  let descriptionText = "Got no Value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
  // return ['Max', 'Tom']; //error 발생 : 타입을 명시했기 때문에 그렇다.
}

console.log(countAndDescribe('Hi, there!'));

//객체 key, value에 합당한 ts Generics
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}
//  T : { name: 'Max' }, U : 'name'
const value = extractAndConvert({ name: 'Max' }, 'name');
console.log(value);

//  위의 설명이 다소 복잡하다. 우선 U는 객체의 key, value 형태로 구성되어 있다. 그리고 U는 T에서 key에 해당되는 값을 상속받아 key타입을 지니고 있다. 즉, name 부분을 반환하는 형태이다. return 값의 반환을 보면 object의 해당 key값을 도출하려는 의도이다. 따라서, console.log(value)의 값은 Max가 된다.