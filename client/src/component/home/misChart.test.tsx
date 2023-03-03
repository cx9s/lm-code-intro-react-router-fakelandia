import { render, screen } from "@testing-library/react";
import MisChart from "./misChart";

const rudeness = 0,
  vegetables = 0,
  lift = 0,
  united = 0;

test("Given the MisChart, When the component is rendered, Then the svg should be defined", async () => {
  render(
    <MisChart
      rudeness={rudeness}
      vegetables={vegetables}
      lift={lift}
      united={united}
    />
  );
  const svg = screen.findByRole("svg");
  expect(svg).toBeDefined;
});
