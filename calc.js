// export default function calc(a,b) {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const div = (a, b) => a / b;
//   const mult = (a, b) => a * b;
//   return { add, sub, div, mult };
// }
export default function calc(a, b, op) {
  if (typeof a !== 'number') return 'error';
  if (typeof b !== 'number') return 'error';
  let sum;
  switch (op) {
    case '+':
      sum = a + b;
      break;
    case '-':
      sum = a - b;
      break;
    case '/':
      sum = a / b;
      break;
    case '*':
      sum = a * b;
      break;
    default:
      return 'error';
  }
  return sum;
}
