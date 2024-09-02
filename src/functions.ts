function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ', +num);
}

function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  return cd(result);
}

const test = addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

console.log(test);
printResult(add(1, 2));

let result: (a: number, b: number) => number;
result = add;
console.log(result(1, 2));
