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
}
console.log(countAndDescribe('Hi, there!'));
