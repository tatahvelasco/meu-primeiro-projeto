const multiply = require('../multiply');

test('multiplica 2 * 3 para ser 6', () => {
  expect(multiply(2, 3)).toBe(6);
});