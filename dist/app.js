"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
// 여기서 두번째 인자에 일반 `30`을 넣으면 객체로 접근을 할 수 없을 뿐 아무런 에러가 발생하지 않는다. 우리가 의도한건 object임을 준수 해야하는 것이다.
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30); // error가 발생하지 않는다.
// const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergeObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.name);
