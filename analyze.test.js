import analyze from './analyze';

test('array [1,8,3,4,2,6]', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    avg: 4,
    min: 1,
    max: 8,
    len: 6,
  });
});
test('array [1,8,3,4,2,6]', () => {
  expect(analyze([12, 83, 32, 41, 32, 86, 6, 7])).toStrictEqual({
    avg: 37,
    min: 6,
    max: 86,
    len: 8,
  });
});
test('if given anything but numbers, return', () => {
  expect(analyze(['lol', 2, 4, 'nope', 1, 12])).toBe('error');
});
test('1,2,3,4', () => {
  expect(analyze([1, 2, 3, 4])).toStrictEqual({
    avg: 2,
    min: 1,
    max: 4,
    len: 4,
  });
});
