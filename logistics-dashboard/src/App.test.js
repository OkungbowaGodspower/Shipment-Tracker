import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("toggles theme when button is clicked", () => {
  render(<App />);

  const button = screen.getByText("Toggle Theme");
  fireEvent.click(button);

  const dashboard = screen.getByTestId("dashboard");
  expect(dashboard).toHaveAttribute("data-theme", "dark");
});
