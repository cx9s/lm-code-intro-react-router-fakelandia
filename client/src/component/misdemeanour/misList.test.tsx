import { render, screen } from "@testing-library/react";
import MisList from "./misList";
import { MisdemeanourDataType } from "./misdemeanours.types";

test("Given the MisList, When the component is rendered, Then the text should be present", async () => {
  const misList: MisdemeanourDataType[] = [
    { citizenId: 1, misdemeanour: "rudeness", date: "testDate" },
  ];

  render(<MisList misList={misList} />);
  const theadText = screen.getByText("Citizen ID");
  expect(theadText).toBeInTheDocument();
  const tbodyText = screen.getByText("testDate");
  expect(tbodyText).toBeInTheDocument();
});
