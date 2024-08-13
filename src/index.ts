// 튜플 타입 지정 방식

//첫 번째 인자는 string, 두 번째 인자는 number
let b: [string, number];

b = ['z', 3];
// b = [3, '3'];  //-> error

b[0].toLowerCase();
// b[1].toLowerCase();  //-> error: 숫자에는 대/소문자를 지정할 수 없다.
