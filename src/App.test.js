import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  // renders the app component
  render(<App />);

  // finds our two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  //finds the button
  const button = screen.getByRole("button");

  //simulates the user clicking the button and typing on the keyboard
  await user.click(nameInput);
  await user.keyboard("jane");
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  await user.click(button);

 // finds the name and email by the cell on the table 
  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });

  // Assertion - expect the name and email to be in the document 
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
