import { maxLength, minLength, mustBeSelected } from "./validationRules";

describe("validationRules: maxLength", () => {
  it("returns an error message if a string is too long", () => {
    const fn = maxLength(2);
    const result = fn("abc");
    expect(result).toBeDefined();
  });

  it("returns undefined if a string is below maxLength", () => {
    const fn = maxLength(2);
    const result = fn("a");
    expect(result).toBeUndefined();
  });

  it("returns undefined if a string is equal to maxLength", () => {
    const fn = maxLength(2);
    const result = fn("ab");
    expect(result).toBeUndefined();
  });
});

describe("validationRules: minLength", () => {
  it("returns an error message if a string is too short", () => {
    const fn = minLength(2);
    const result = fn("a");
    expect(result).toBeDefined();
  });

  it("returns undefined if a string is above minLength", () => {
    const fn = minLength(2);
    const result = fn("abc");
    expect(result).toBeUndefined();
  });

  it("returns undefined if a string is equal to minLength", () => {
    const fn = minLength(2);
    const result = fn("ab");
    expect(result).toBeUndefined();
  });
});

describe("validationRules: mustBeSelected", () => {
  it("returns an error message if a select is unselected", () => {
    const fn = mustBeSelected();
    const result = fn("NOT_SELECTED");
    expect(result).toBeDefined();
  });

  it("returns no error message if a select is selected", () => {
    const fn = mustBeSelected();
    const result = fn("rudeness");
    expect(result).toBeUndefined();
  });
});
