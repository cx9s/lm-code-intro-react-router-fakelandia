import { render, screen } from "@testing-library/react";
import NotFound from "./notFound";
import { BrowserRouter as Router } from "react-router-dom";

test("Given the NotFound, When the component is rendered, Then the text should be present", () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );
  const text = screen.getByText(/Are you lost in mountains/i);
  expect(text).toBeInTheDocument();
});
