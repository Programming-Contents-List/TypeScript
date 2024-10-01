"use strict";
// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB);
// }
function countAndDescribe(element) {
    let descriptionText = "Got no Value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
    // return ['Max', 'Tom']; //error 발생 : 타입을 명시했기 때문에 그렇다.
}
console.log(countAndDescribe('Hi, there!'));
