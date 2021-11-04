const capitalizeString = require('./capitalizeString');

test.skip('hello to be capitalized', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});
test.skip('world to be capitalized', () => {
  expect(capitalizeString('world')).toBe('World');
});
test.skip('hello world to be Hello world', () => {
  expect(capitalizeString('hello world')).toBe('Hello world');
});
