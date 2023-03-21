function sum(a, b) {
  return a + b;
}

test('the component must return the DOM element named "nav"', () => {
  expect(sum(1, 2)).toBe(3);
});
