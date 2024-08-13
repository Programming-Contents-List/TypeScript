type Score = 'A' | 'B' | 'C' | 'F';

export interface userType {
  name: string,
  age: number,
  gender?: string,
  readonly birthYear: number,
  [grade: number]: Score;
}

//함수 interface 선언 방식
export interface Add {
  (num1: number, num2: number): number;
}

export interface isAdult {
  (age: number): boolean;
}