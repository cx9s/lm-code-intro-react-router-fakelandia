import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import user from "@testing-library/user-event";

test("Given the Nav, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const text = screen.getByText(/Home/i);
  expect(text).toBeInTheDocument();
});

test("Given the Nav, When the '+'/'-' is clicked, Then the '-'/'+' should be present", async () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const plus = screen.getByText("+");
  await user.click(plus);
  const minus = screen.getByText("-");
  expect(minus).toBeInTheDocument();
});
