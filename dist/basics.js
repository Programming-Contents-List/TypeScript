"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2; //result는 number라고 추론을 한다.
    if (showResult) {
        console.log(result + phrase);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
// resultPhrase = 0;  //error -> 타입 추론으로 resultPhrase는 string이다. 따라 0이라는 number타입을 할당할 수 없다.
add(number1, number2, printResult, resultPhrase);
