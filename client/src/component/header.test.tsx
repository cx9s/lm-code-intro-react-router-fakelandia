import { render, screen } from "@testing-library/react";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

test("Given the Header, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const text = screen.getByText(/Home/i);
  expect(text).toBeInTheDocument();
});
