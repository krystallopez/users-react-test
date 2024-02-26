import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./components/UserForm";

test("user form shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate component or find element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // make an assertion, assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
