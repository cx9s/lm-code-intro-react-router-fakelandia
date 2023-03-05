import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TextInput, TextInputProps } from "./textInput";
import { ConfessionFormData } from "./confessionForm.types";

describe("<TextInput>", () => {
  it("Given the required props, When the component is rendered, an <input> should be rendered", () => {
    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: "",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("Given the required props, When the component is rendered, an <textarea> should be rendered", () => {
    const requiredProps: TextInputProps = {
      id: "details",
      type: "textarea",
      name: "details",
      label: "Details",
      placeholder: "Enter details",
      value: "",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("Given the required props, When the component is rendered, basic fields should be rendered", () => {
    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: "",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const byPlaceholder = screen.getByPlaceholderText("Enter subject");
    const label = screen.getByText("Subject:");

    expect(byPlaceholder).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("Given the required props, When the component is rendered, Then the value should be set to a provided value", () => {
    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: "subject",
      onChangeHandler: jest.fn(),
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("subject");
  });

  it("Given the <text> is rendered, when a new value is entered, calls onChange with the correct parameters", async () => {
    const mockChangeHandler = jest.fn();

    const inputName = "someInputName";

    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: inputName as keyof ConfessionFormData,
      label: "Subject",
      placeholder: "Enter subject",
      value: "",
      onChangeHandler: mockChangeHandler,
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    await user.type(screen.getByRole("textbox"), "subject");

    expect(mockChangeHandler).toHaveBeenCalledTimes(7); // "s", "u", "b", "j", "e", "c", "t"
    expect(mockChangeHandler).toHaveBeenLastCalledWith("t", inputName);
  });

  it(" Given the <textarea> is rendered, when a new value is entered, calls onChange with the correct parameters", async () => {
    const mockChangeHandler = jest.fn();

    const inputName = "someInputName";

    const requiredProps: TextInputProps = {
      id: "details",
      type: "textarea",
      name: inputName as keyof ConfessionFormData,
      label: "Details",
      placeholder: "Enter details",
      value: "",
      onChangeHandler: mockChangeHandler,
      validate: jest.fn(),
    };
    render(<TextInput {...requiredProps} />);

    await user.type(screen.getByRole("textbox"), "details");

    expect(mockChangeHandler).toHaveBeenCalledTimes(7); // "d", "e", "t", "a", "i", "l", "s"
    expect(mockChangeHandler).toHaveBeenLastCalledWith("s", inputName);
  });

  it("Given the required props, when a new value is entered, calls validate function with the provided value", async () => {
    const mockValidate = jest.fn();
    const value = "someValue";

    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<TextInput {...requiredProps} />);

    expect(mockValidate).toHaveBeenCalledTimes(1);
    expect(mockValidate).toHaveBeenCalledWith(value);
  });

  it("Given the required props, when the input is not touched, does not display error messages", async () => {
    const mockValidate = jest.fn();
    const value = "";

    mockValidate.mockReturnValue([
      "Fake error message",
      "Another fake error message",
    ]);

    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<TextInput {...requiredProps} />);

    const errorOne = screen.queryByText("Fake error message");
    const errorTwo = screen.queryByText("Another fake error message");

    expect(errorOne).toBeNull();
    expect(errorTwo).toBeNull();
  });

  it("Given the required props, when the input is touched, does display error messages", async () => {
    const mockValidate = jest.fn();
    const value = "";

    mockValidate.mockReturnValue([
      "Fake error message",
      "Another fake error message",
    ]);

    const requiredProps: TextInputProps = {
      id: "subject",
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Enter subject",
      value: value,
      onChangeHandler: jest.fn(),
      validate: mockValidate,
    };
    render(<TextInput {...requiredProps} />);

    await user.type(screen.getByRole("textbox"), "subject");

    const errorOne = screen.queryByText("Fake error message");
    const errorTwo = screen.queryByText("Another fake error message");

    expect(errorOne).toBeInTheDocument();
    expect(errorTwo).toBeInTheDocument();
  });
});
