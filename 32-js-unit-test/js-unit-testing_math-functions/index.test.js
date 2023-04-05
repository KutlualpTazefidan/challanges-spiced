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
