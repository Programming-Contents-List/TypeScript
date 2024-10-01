"use strict";
// 제네릭은 interface와 달리 매개변수처럼 정해진 타입이 없을 때 사용하는 방법이다.
function merge(objA, objB) {
    // 일반적으론 `T&U`를 작성하지 않아도 괜찮지만 TS의 엄격한 문법 준수를 사용해서 교차 타입임을 직접 명시해야한다.
    return Object.assign({}, objA, objB);
    // `{}`를 넣는 이유 : Object.assign을 사용할 때 첫 번째 인수로 {} 빈 객체를 넣는 이유는 기존 객체를 변경하지 않고 새로운 객체를 생성하여 반환하기 위해서이다. 이는 원본 객체를 보호하고 불변성(immutability)을 유지하기 위해 사용하는 일반적인 방법이다.
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// 이렇게 제네릭을 사용해서 ts가 스스로 타입 추론을 할 수 있다. 하지만 아래와 같이 제네릭으로 직접적으로 타입을 명시할 수 있다.
const mergeObjExample = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// 그렇다면 왜 위의 방식으로 직접 명시하지 않아도 되는 것인가?
// 이유는 제네릭을 사용하는 함수의 입력값을 기반으로 제네릭 타입을 자동으로 결정되는 타입 추론때문인 것이다. 즉, 타입스크립트가 타입을 지정하는 js의 확장형 코드라지만 `타입추론`을 모르고 사용한다면 타입스크립트를 제대로 사용하지 않는 것이다.
const mergeObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.name);
