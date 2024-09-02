let userInput: unknown;

let userName: string;
userInput = 5;
userInput = 'Max';

console.log(typeof userInput);

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never { //:never
  throw { message: message, errorCode: code };
} //generateError는 never타입을 반환한다. 이유는 throw 때문인데 절대적으로 값이 변하면 안되기 때문이다. 따라서 never타입은 다음과 같다.
//never 타입은 어떠한 값도 반환하지 않는 함수의 반환 타입을 나타낸다. 이 타입은 함수가 정상적으로 완료되지 않고 항상 예외를 던지거나 무한 루프에 빠져 끝나지 않는 경우에 사용된다. 오해하지 말아야할 것은 literal type으로 확인을 하면 void로 선언이 되어있지만 throw를 사용하면 무조건으로 never가 반환된다. 따라서 암묵적으로 never를 반환은 하지만 never타입임을 코드에 명시해주는 것이 좋다.

const resultError = generateError('An error occurred!', 500);
console.log('resultError: ', resultError);  //본래 일반적인 함수라면 undefined를 반환해야한다.
//하지만 아무것도 반환되는 것이 없다. 이유는 generateError는 never 타입으로 반환이 되기 때문에 컴파일이 중도 정지가 되는 것이다.
//참고로 throw는 try,catch를 사용해도 무시하지 않고 중도 정지가 된다.