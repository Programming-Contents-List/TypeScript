const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: ADMIN,  //0
};

person.role = READ_ONLY;

if (person.role === ADMIN) {
  console.log(person.role);
} else if (person.role === READ_ONLY) {
  console.log(person.role);
} else if (person.role === AUTHOR) {
  console.log(person.role);
}
