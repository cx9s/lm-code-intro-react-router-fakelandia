import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

test("Given the Router, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
  const text = screen.getByText(/Xuan/i);
  expect(text).toBeInTheDocument();
});
