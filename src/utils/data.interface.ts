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

interface ToyCar extends Car, Toy {
  price: number;
}

export interface User {
  name: string;
}

export interface JoinUser {
  name: string;
  age: number;
}