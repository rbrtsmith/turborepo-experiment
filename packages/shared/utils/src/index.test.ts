import { double, capitalise } from '.';

test('should double the input', () => {
  expect(double(3)).toBe(6);
});

test('should capitalise the first letter of each word', () => {
  expect(capitalise('hello world.')).toBe('Hello World.');
});
