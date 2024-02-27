import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // function to add user
  const onUserAdd = (user) => { // arrow function syntax, takes param of user
    setUsers([...users, user]); // updates users state, spread operator creates a new array of users with the new user being added, appends new user to the end of the array 
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users}/>
    </div>
  );
}

export default App;
