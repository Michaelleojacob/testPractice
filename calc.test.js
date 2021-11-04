import calc from './calc';

// const newCalc = calc();
// test('add 1+2=3', () => {
//   expect(newCalc.add(1, 2)).toBe(3);
// });
// test('add 1+2=3', () => {
//   expect(newCalc.add(9, 2)).toBe(11);
// });
// test('sub 3-2=1', () => {
//   expect(newCalc.sub(3, 2)).toBe(1);
// });
// test('divide 10/2=5', () => {
//   expect(newCalc.div(10, 2)).toBe(5);
// });
// test('multiply 4*6=24', () => {
//   expect(newCalc.mult(4, 6)).toBe(24);
// });
test.skip('add 1+2=3', () => {
  expect(calc(1, 2, '+')).toBe(3);
});
test.skip('add 1+2=3', () => {
  expect(calc(9, 2, '+')).toBe(11);
});
test.skip('sub 3-2=1', () => {
  expect(calc(3, 2, '-')).toBe(1);
});
test.skip('divide 10/2=5', () => {
  expect(calc(10, 2, '/')).toBe(5);
});
test.skip('multiply 4*6=24', () => {
  expect(calc(4, 6, '*')).toBe(24);
});
test.skip('should return error if a is not a number', () => {
  expect(calc('lol', 6, '+')).toBe('error');
});
test.skip('should return error if b is not a number', () => {
  expect(calc(7, 'boyo', '+')).toBe('error');
});
test.skip('should return error if op is not + - / *', () => {
  expect(calc(7, 3, 4)).toBe('error');
});
