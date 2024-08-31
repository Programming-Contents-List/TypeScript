"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN, //0
};
person.role = Role.READ_ONLY;
if (person.role === Role.ADMIN) {
    console.log(person.role);
}
else if (person.role === Role.READ_ONLY) {
    console.log(person.role);
}
else if (person.role === Role.AUTHOR) {
    console.log(person.role);
}
