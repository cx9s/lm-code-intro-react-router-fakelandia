import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout";

test("Given the MainLayout, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  const text = screen.getByText(/Xuan/i);
  expect(text).toBeInTheDocument();
});
