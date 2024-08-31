const person: {
  name: string,
  age: number,
  hobbies: string[];
  role: (number | string)[];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  //tuple 튜플은 유니온 타입으로 구성되어 있다.
  role: [2, 'author']
};

//유니온으로 구성되어 있기 떄문에 number와 string으로 값을 재할당할 수 있다.
person.role.push('admin');  //push는 튜플에서 허용되는 예외이다. 오류를 잡지 못한다.
person.role[1] = 10;  //error -> string을 할당할 수 없다.
person.role = [0, 'admin', 'user']; //이러한 추가 방식도 에러가 발생한다.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}