import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(
    <Navigation
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const linkPlayScore = screen.getByText(/Play/i);
  const linkHistory = screen.getByText(/History/i);

  expect(linkPlayScore).toBeInTheDocument();
  expect(linkHistory).toBeInTheDocument();
  expect(linkPlayScore.getAttribute("href")).toBe("/game");
  expect(linkHistory.getAttribute("href")).toBe("/history");
});
