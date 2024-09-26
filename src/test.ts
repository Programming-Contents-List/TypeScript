import * as t from "io-ts";

// 스키마 정의: 타입을 정의
const Person = t.type({
  name: t.string,
  age: t.number,
});

// 검증할 데이터
const validData = { name: "Alice", age: 25 };
const invalidData = { name: "Alice", age: "twenty-five" }; // 잘못된 age 타입

// 데이터를 검증 (런타임 타입 체크)
export const validateData = () => {
  const validResult = Person.decode(validData);
  const invalidResult = Person.decode(invalidData);

  if (validResult._tag === "Right") {
    console.log("Valid data:", validResult.right);
  } else {
    console.log("Validation failed:", validResult.left);
  }

  if (invalidResult._tag === "Right") {
    console.log("Valid data:", invalidResult.right);
  } else {
    console.log("Validation failed:", invalidResult.left);
  }
};