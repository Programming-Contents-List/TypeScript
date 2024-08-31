const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  //tuple 튜플은 유니온 타입으로 구성되어 있다.
  role: [2, 'author']
};

//유니온으로 구성되어 있기 떄문에 number와 string으로 값을 재할당할 수 있다.
person.role.push('admin');
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}