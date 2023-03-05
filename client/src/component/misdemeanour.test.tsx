import { render, screen } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";

test("Given the Misdemeanour, When the component is rendered, Then the element with testid should be present", () => {
  render(<Misdemeanour />);
  const text = screen.getByTestId("misContainer");
  expect(text).toBeInTheDocument();
});
