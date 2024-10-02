// 제네릭 유틸리티 타입

// Normal 하게 사용하는 방식은 이러하다. 하지만 이런 방식은 여러 불편함이 존재한다.
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date,
): CourseGoal {
  return {
    title: title, description: description, completeUntil: completeUntil
  };
}

// Partial(파셜) 타입