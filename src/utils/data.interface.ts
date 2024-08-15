type Score = 'A' | 'B' | 'C' | 'F';

export interface userType {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

export interface Add {
  (num1: number, num2: number): number;
}

export interface isAdult {
  (age: number): boolean;
}

export interface Car {
  color: string;
  wheels: number;
  start(): void;
}

export interface Benz extends Car {
  door: number;
  stop(): void;
}

interface Toy {
  name: string;
}

// 동시 확장 방식
interface ToyCar extends Car, Toy {
  price: number;
}

type Job = "police" | "developer" | "teacher";

export interface UserName {
  name: string;
  job: Job;
}

// '|' 이게 유니온 타입
export interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}