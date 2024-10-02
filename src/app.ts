// 제네릭 유틸리티 타입

// Partial(파셜) 타입
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {
  };
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];  //Readonly 타입으로 제네릭으로 정의
// names.push('Manu'); //readonly 속성으로 push 하거나 pop이 불가능 하다.
// names.pop(); //readonly 속성으로 push 하거나 pop이 불가능 하다.