"use strict";
// 제네릭 유틸리티 타입
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'Anna']; //Readonly 타입으로 제네릭으로 정의
// names.push('Manu'); //readonly 속성으로 push 하거나 pop이 불가능 하다.
// names.pop(); //readonly 속성으로 push 하거나 pop이 불가능 하다.
