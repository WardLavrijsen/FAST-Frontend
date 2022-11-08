import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Klik links op een competitie, of voeg er een toe./i
  );
  expect(linkElement).toBeInTheDocument();
});
