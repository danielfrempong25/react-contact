import { useState } from "react";
import EditContactForm from "./EditContactForm";
import { v4 as uuid } from "uuid";

const Contacts = ({ users, onDelete, saveChanges }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="card">
          <p>Name : {user.name}</p>
          <p>Phone : {user.phoneNumber}</p>
          <p>Location: {user.location}</p>
          <button onClick={handleButtonClick}>edit</button>
          <button onClick={() => onDelete(user.id)}>delete</button>
          {showModal && (
            <EditContactForm
              modalClose={handleModalClose}
              saveChanges={saveChanges}
              user={user}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default Contacts;
