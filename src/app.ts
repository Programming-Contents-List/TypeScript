function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else if (typeof n1 === 'string' && typeof n2 === 'string') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(20, 30, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('20', '30', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
