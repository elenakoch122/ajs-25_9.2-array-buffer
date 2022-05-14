import ArrayBufferConverter from '../ArrayBufferConverter';

test('create an instance of ArrayBufferConverter', () => {
  expect(new ArrayBufferConverter()).toBeInstanceOf(ArrayBufferConverter);
});

test('load method', () => {
  const result = new ArrayBufferConverter();
  result.load();
  expect(typeof result.data).toBe('object');
});

test('toString method', () => {
  const result = new ArrayBufferConverter();
  expect(typeof result.toString()).toBe('string');
});
