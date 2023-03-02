import { render, screen } from "@testing-library/react";
import Home from "./home";

test("Given the Home, When the component is rendered, Then the text should be present", () => {
  render(<Home />);
  const text = screen.getByText(/Confessions today/i);
  expect(text).toBeInTheDocument();
});
