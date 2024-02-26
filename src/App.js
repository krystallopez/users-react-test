import { UserForm, UserList } from "./components/UserForm";
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
