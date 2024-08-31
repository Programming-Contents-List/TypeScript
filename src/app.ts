function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; //result는 number라고 추론을 한다.
  if (showResult) {
    console.log(result + phrase);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
// resultPhrase = 0;  //error -> 타입 추론으로 resultPhrase는 string이다. 따라 0이라는 number타입을 할당할 수 없다.

add(number1, number2, printResult, resultPhrase);