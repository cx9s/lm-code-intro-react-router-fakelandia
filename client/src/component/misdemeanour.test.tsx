import { render, screen } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";

test("Given the NotFound, When the component is rendered, Then the text should be present", () => {
  render(<Misdemeanour />);
  const text = screen.getByTestId("misContainer");
  expect(text).toBeInTheDocument();
});
