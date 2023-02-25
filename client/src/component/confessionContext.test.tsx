import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ConfessionProvider, { ConfessionContext } from "./confessionContext";

const ChildComponent: React.FC = () => {
  const { confessions } = useContext(ConfessionContext);
  return <p className="confessionsLength">{confessions.length}</p>;
};

test("Given the ConfessionProvider, When the child component is rendered, Then the context should be able to use", () => {
  render(
    <BrowserRouter>
      <ConfessionProvider>
        <ChildComponent />
      </ConfessionProvider>
    </BrowserRouter>
  );
  const text = screen.getByText(/0/i);
  expect(text).toHaveClass("confessionsLength");
});
