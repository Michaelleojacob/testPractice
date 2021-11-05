import caesar from './caesar';

test('a,3 equals c', () => {
  expect(caesar('a', 3)).toBe('d');
});
test('hello world,3', () => {
  expect(caesar('hello world', 4)).toBe('lipps asvph');
});
test('we can use negative numbers', () => {
  expect(caesar('mikey', -5)).toBe('hdfzt');
});
test('num can be over 26', () => {
  expect(caesar('testing high numbers', 2036)).toBe('bmabqvo pqop vcujmza');
});
test('Capital letters work', () => {
  expect(caesar('CoWaBunGa DoOd', 12)).toBe('OaImNgzSm PaAp');
});
test('punctuation does not change', () => {
  expect(caesar('Holy Smokes, Batman! Look OUT!@#$%!', -20)).toBe(
    'Nure Ysuqky, Hgzsgt! Ruuq UAZ!@#$%!',
  );
});
