import { add } from "./index";
import { subtract } from "./index";
import { multiply } from "./index";
import { divide } from "./index";

// Test cases for add
test("Add three and two", () => {
  const result = add(3, 2);
  expect(result).toBe(5);
});
test("Negative value if the greater argument is negative", () => {
  const result = add(-5, 4);
  expect(result).toBeLessThan(0);
});
test("Add 0.1 and 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// Test cases for subtracting
test("Subtract 5 from 15", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("Second value greater than the first one", () => {
  const result = subtract(0.1, 0.2);
  expect(result).toBeLessThan(0);
});

// Test cases for multiply

test("Multiply 2 and 4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("First argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("Second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("Both arguments are negative", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});
