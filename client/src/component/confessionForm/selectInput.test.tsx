import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { SelectInput, SelectProps } from "./selectInput";
import { SELECTOPTIONS } from "./selectOptions";

describe("<SelectInput>", () => {
  it("Given the required props, When the component is rendered, Then the text should be present", () => {
    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: "NOT_SELECTED",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<SelectInput {...requiredProps} />);

    const input = screen.getByText(requiredProps.label + ":");

    expect(input).toBeInTheDocument();
  });

  it("Given the required props, When the component is rendered, Then a list of options should be present", () => {
    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: "NOT_SELECTED",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<SelectInput {...requiredProps} />);

    const firstOptionDisplay = screen.getByText(SELECTOPTIONS[0].display);
    const secondOptionDisplay = screen.getByText(SELECTOPTIONS[1].display);

    expect(firstOptionDisplay).toBeInTheDocument();
    expect(secondOptionDisplay).toBeInTheDocument();
  });

  it("Given the required props, When the component is rendered, Then the value should be set to a provided value", () => {
    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: "NOT_SELECTED",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<SelectInput {...requiredProps} />);

    const input = screen.getByRole("combobox");

    expect(input).toHaveValue("NOT_SELECTED");
  });

  it("Given the required props, when a new value is selected, calls onChange with the correct parameters", async () => {
    const mockChangeHandler = jest.fn();

    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: "NOT_SELECTED",
      onChangeHandler: mockChangeHandler,
      validate: jest.fn(),
    };
    render(<SelectInput {...requiredProps} />);

    await user.selectOptions(screen.getByRole("combobox"), "rudeness");

    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
    expect(mockChangeHandler).toHaveBeenCalledWith("rudeness", "reason");
  });

  it("Given the required props, when a new value is selected, calls validate function with the provided value", async () => {
    const mockValidate = jest.fn();
    const value = "NOT_SELECTED";

    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<SelectInput {...requiredProps} />);

    expect(mockValidate).toHaveBeenCalledTimes(1);
    expect(mockValidate).toHaveBeenCalledWith(value);
  });

  it("Given the required props, when the select is not touched, does not display error messages", async () => {
    const mockValidate = jest.fn();
    const value = "rudeness";

    mockValidate.mockReturnValue([
      "Fake error message",
      "Another fake error message",
    ]);

    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: [],
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<SelectInput {...requiredProps} />);

    const errorOne = screen.queryByText("Fake error message");
    const errorTwo = screen.queryByText("Another fake error message");

    expect(errorOne).toBeNull();
    expect(errorTwo).toBeNull();
  });

  it("Given the required props, when the select is touched, does display error messages", async () => {
    const mockValidate = jest.fn();
    const value = "NOT_SELECTED";

    mockValidate.mockReturnValue([
      "Fake error message",
      "Another fake error message",
    ]);

    const requiredProps: SelectProps = {
      id: "reason",
      name: "reason",
      label: "Reason",
      options: SELECTOPTIONS,
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<SelectInput {...requiredProps} />);

    await user.selectOptions(screen.getByRole("combobox"), "rudeness");

    const errorOne = screen.queryByText("Fake error message");
    const errorTwo = screen.queryByText("Another fake error message");

    expect(errorOne).toBeInTheDocument();
    expect(errorTwo).toBeInTheDocument();
  });
});
