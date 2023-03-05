import { render, screen } from "@testing-library/react";
import Confession from "./confession";

test("Given the Confession, When the component is rendered, Then the element with testid should be present", () => {
  render(<Confession />);
  const text = screen.getByTestId("confessionContainer");
  expect(text).toBeInTheDocument();
});
