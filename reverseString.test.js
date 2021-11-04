const reverseString = require('./reverseString');

test.skip('abc to equal cba', () => {
  expect(reverseString('abc')).toBe('cba');
});
test.skip('hello world to equal dlrow olleh', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
