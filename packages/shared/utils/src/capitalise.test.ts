import { capitalise } from './capitalise';

test('should capitalise the first letter of each word', () => {
  expect(capitalise('hello world.')).toBe('Hello World.');
});
