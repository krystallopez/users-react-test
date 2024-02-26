import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
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
