//enum : 특정 값, 공통되는 값을 가지고 있고 싶을 때 enum을 사용하면 된다.enum은 key, value로 두 쌍을 가지고 있다는 특징이 있다.

enum Os {
  Window = 3,
  Ios = 10,
  Android
}

console.log(Os['Ios']); //10
console.log(Os[10]);  //Ios

//enum을 숫자가 아닌 문자열로 지정했을 경우 단방향으로만 작용한다. 즉, 키(Key)는 항상 문자열로 정의 해야한다. 값(Value)을 문자열로 정의하면 키와 혼동이 되기 때문에 그렇다는 거지?
enum Os2 {
  Window = 'win',
  Ios = 'ios',
  Android = 'and'
}

//간접 접근
//key
console.log(Os2['Window']);
console.log(Os2['Ios']);
//value
// console.log(Os2['ios']); //-> error
// console.log(Os2['win']); //-> error key는 항상 문자열로 지정되어 있어서 값(value)가 문자열이면 문제가 발생한다.

//그렇다면 문자열로 정의 되어 있는 값(value)에 접근을 어떻게 할까? 아래와 같이 접근할 수 있다.

//직접 접근
console.log(Os2.Window);
//값 할당을 통한 직접 접근 방식
let myOs: Os2;

myOs = Os2.Window
console.log(myOs);
