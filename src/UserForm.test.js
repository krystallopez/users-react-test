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

test("it calls onUserAdd when the form is submitted", async () => {
  // uses jest to create a mock function
  const mock = jest.fn();

  // render the UserForm component
  render(<UserForm onUserAdd={mock} />);

  // find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i
  })

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  //simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  //find the button
  const button = screen.getByRole("button");

  // simulate click the button
  await user.click(button);

  //Assertion to make user 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
