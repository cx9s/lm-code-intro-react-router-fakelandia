import { render, screen } from "@testing-library/react";
import HomeImage from "./homeImage";

test("Given the HomeImage, When the component is rendered, Then the text should be present", () => {
  render(<HomeImage />);
  const text = screen.getByText(/Welcome to Fakelandia/i);
  expect(text).toBeInTheDocument();
});
