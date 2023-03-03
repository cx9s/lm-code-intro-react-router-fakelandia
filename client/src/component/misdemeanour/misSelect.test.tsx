import { render, screen } from "@testing-library/react";
import MisSelect from "./misSelect";
import { MisSelectProps } from "./misSelect";
import user from "@testing-library/user-event";

test("Given the MisSelect, When the component is rendered, Then the text should be present", async () => {
  const requiredProps: MisSelectProps = { setMis: jest.fn() };

  render(<MisSelect {...requiredProps} />);
  const text = screen.getByText("All");
  expect(text).toBeInTheDocument();
});

test("Given the MisSelect, when the option is selected, the function should be called", async () => {
  const mockChangeHandler = jest.fn();
  const setMis: MisSelectProps = { setMis: jest.fn() };

  const requiredProps: MisSelectProps = {
    setMis: mockChangeHandler,
  };

  render(<MisSelect {...requiredProps} />);
  await user.selectOptions(screen.getByRole("combobox"), "rudeness");
  expect(mockChangeHandler).toHaveBeenCalledTimes(1);
  expect(mockChangeHandler).toHaveBeenCalledWith("rudeness");
});
