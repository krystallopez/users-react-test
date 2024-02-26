import UserForm from "./components/UserForm";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd}/>
    </div>
  );
}

export default App;
