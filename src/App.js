import { useState } from "react";
import "./App.css";
import { info } from "./info";
import Contacts from "./Contacts";
import ContactsForm from "./ContactsForm";

function App() {
  const [users, setUsers] = useState(info);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteContact = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const saveChanges = (id, update) => {
    setUsers(
      users.map((item) => {
        if (item.id === id) {
          return update;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="grid-item">
        <ContactsForm handleAddUser={handleAddUser} />
      </div>
      <div className="grid-item nn">
        <Contacts
          users={users}
          onDelete={handleDeleteContact}
          saveChanges={saveChanges}
        />
      </div>
    </div>
  );
}

export default App;
