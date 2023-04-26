import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);
  const gameForm = screen.getByRole("form");
  const gameButton = screen.getByRole("button");
  const gameInputFields = screen.getAllByLabelText("input-field");
  expect(gameForm).toBeInTheDocument();
  expect(gameButton).toBeInTheDocument();
  expect(gameInputFields).toHaveLength(2);
});

test("renders a form with the accessible name 'Create a new game'", () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);
  const gameForm = screen.getByLabelText("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={handleCreateGame} />);
  const gameInputFields = screen.getAllByLabelText("input-field");
  const gameButton = screen.getByRole("button");
  await user.type(gameInputFields[0], "PSGGame");
  await user.type(gameInputFields[1], "Messi");
  await user.click(gameButton);
  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "PSGGame",
    playerNames: ["Messi"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={handleCreateGame} />);
  const gameInputFields = screen.getAllByLabelText("input-field");
  const gameButton = screen.getByRole("button");
  await user.type(gameInputFields[0], "PSGGame");
  // await user.type(gameInputFields[1], "");
  await user.click(gameButton);
  expect(handleCreateGame).toHaveBeenCalledTimes(0);
});
