import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleInput = jest.fn();
  render(
    <Input
      labelText={"LabelText"}
      placeholder={"Placeholder"}
      name={"name"}
      value={"value"}
      onChange={handleInput}
      required
      aria-label="input-field"
    />
  );
  expect(screen.getByLabelText(/labeltext/i)).toBeInTheDocument();
  const inputField = screen.getByLabelText("input-field");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveAttribute("placeholder", "Placeholder");
  expect(inputField).toHaveAttribute("name", "name");
  expect(inputField).toHaveAttribute("value", "value");
  expect(inputField).toHaveAttribute("required", "");
  expect(inputField.getAttribute("onChange")).toBe(null);
});

test("calls callback on every user input", async () => {
  const handleInput = jest.fn();
  const user = userEvent.setup();
  render(
    <Input
      labelText={"LabelText"}
      placeholder={"Placeholder"}
      name={"name"}
      value={"value"}
      onChange={handleInput}
      required
      aria-label="input-field"
    />
  );
  const inputField = screen.getByLabelText("input-field");
  await user.type(inputField, "test");
  expect(handleInput).toHaveBeenCalledTimes(4);
});
