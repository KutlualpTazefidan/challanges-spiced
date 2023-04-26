import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Ronaldo" score={10} />);
  expect(screen.getByText("Ronaldo")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleOnDecreasePlayerScore = jest.fn();
  const handleOnIncreasePlayerScore = jest.fn();
  const user = userEvent.setup();
  render(
    <Player
      name="Ronaldo"
      score={10}
      onDecreasePlayerScore={handleOnDecreasePlayerScore}
      onIncreasePlayerScore={handleOnIncreasePlayerScore}
    />
  );

  const increaseButton = screen.getByLabelText("Increase Score");
  const decreaseButton = screen.getByLabelText("Decrease Score");
  await user.click(increaseButton);
  await user.click(decreaseButton);
  expect(handleOnIncreasePlayerScore).toHaveBeenCalledTimes(1);
  expect(handleOnDecreasePlayerScore).toHaveBeenCalledTimes(1);
});
