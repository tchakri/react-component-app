import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Green, Large, Primary, Secondary, Small } from "./Button.stories";

test("should render Button", () => {
  const label = 'Click me!'
  render(<Button label={label} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent(label);
});

test("should render Primary", () => {
  render(<Button {...Primary.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--primary");
});

test("should render Secondary", () => {
  render(<Button {...Secondary.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--secondary");
});

test("should render Large", () => {
  render(<Button {...Large.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--large");
});

test("should render Small", () => {
  render(<Button {...Small.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--small");
});

test("should render Green", () => {
  render(<Button {...Green.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveStyle("background-color: #24f624;");
});