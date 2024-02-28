import { render, screen, within } from "@testing-library/react";
import UserList from "./components/UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@same.com" },
  ];

  // pass users as prop to render all users in UserList
  render(<UserList users={users} />);

  return {
    users,
  };
}

test("render one row per user", () => {
  // eslint-disable-next-line no-unused-vars
  const { users } = renderComponent();

  // find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //assertion, correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {
  const { users } = renderComponent();

  //for loop to iterate through each user

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    //Assertion - show that the name and email are in the document
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
