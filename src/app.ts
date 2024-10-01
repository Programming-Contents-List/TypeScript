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