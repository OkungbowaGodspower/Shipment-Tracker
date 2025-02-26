import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle"; // Correct import path

test("renders theme toggle button and toggles theme", () => {
  const toggleTheme = jest.fn(); // Mock function
  const theme = "light";

  render(<ThemeToggle toggleTheme={toggleTheme} theme={theme} />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  expect(screen.getByTestId("theme-icon")).toHaveClass("text-gray-800"); // Moon icon color

  fireEvent.click(button);

  expect(toggleTheme).toHaveBeenCalledTimes(1);
});

test("renders sun icon for dark theme", () => {
  const toggleTheme = jest.fn();
  const theme = "dark";

  render(<ThemeToggle toggleTheme={toggleTheme} theme={theme} />);

  expect(screen.getByTestId("theme-icon")).toHaveClass("text-yellow-400"); // Sun icon color
});
