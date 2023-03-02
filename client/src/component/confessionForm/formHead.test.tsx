import { render, screen } from "@testing-library/react";
import FormHead from "./formHead";

test("Given the FormHead, When the component is rendered, Then the text should be present", () => {
  render(<FormHead />);
  const text = screen.getByText(
    /It's very difficult to catch people committing misdemeanours/i
  );
  expect(text).toBeInTheDocument();
});
