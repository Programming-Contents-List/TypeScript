"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
// 1. 여기서 두번째 인자에 일반 `30`을 넣으면 객체로 접근을 할 수 없을 뿐 아무런 에러가 발생하지 않는다. 우리가 의도한건 object임을 준수 해야하는 것이다.
// 2. 이를 해결하기 위해서는 제네릭의 선언 방식을 변경해야 한다.
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30); // 1. error가 발생하지 않는다. 2. extends를 사용함으로 error 발생 확인
// const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergeObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.name);
