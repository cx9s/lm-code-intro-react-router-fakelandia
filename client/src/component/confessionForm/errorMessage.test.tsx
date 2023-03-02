import { render, screen } from "@testing-library/react";
import ErrorMessage from "./errorMessage";

test("Given the required params, When the component is rendered, Then the error message should be present", () => {
  const errors: string[] = ["Some message", "Another message"];

  render(<ErrorMessage name="someComponent" messages={errors} />);

  expect(screen.getByText(errors[0])).toBeInTheDocument();
  expect(screen.getByText(errors[1])).toBeInTheDocument();
});
