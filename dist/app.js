"use strict";
// 제네릭 유틸리티 타입
function createCourseGoal(title, description, completeUntil) {
    return {
        title: title, description: description, completeUntil: completeUntil
    };
}
// Partial(파셜) 타입
