const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

//hobby: 문자열
for (const hobby of person.hobbies) {
  //여기서 hobby는 문자열로 취급이 되고 있다.
  //이유는 타입 추론으로 인해서다. person.hobbies는 문자열 배열이라고 인식하고 있기 때문이다.
  console.log(hobby);
  //하지만 map으로 접근을 하게 되면 error가 발생한다. 이유는 문자열은 map으로 사용할 수 없다.
  // console.log(hobby.map(el => console.log(el)));// 만약 사용하고 싶다면 person.hobbies를 다른 변수로 정의하고 map을 사용하면 문제 없이 사용할 수다.
}

//arr: 문자열 배열
let hobby = person.hobbies;
// let arr = person.hobbies;
let arr = hobby;
arr.map(el => console.log(el));
