import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchAdd_component from "./components/SearchAdd_component";
// import UserLists_component from "./components/UserLists_component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleEditUser = (editedUser) => {
    // Implement logic to edit the user
  };

  const handleDeleteUser = (userToDelete) => {
    // Implement logic to delete the user
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <Router>
      <div className="container">
        <div className="title_card">LIST SOCIAL CARD</div>
        <SearchAdd_component addUser={handleAddUser} />
        {/* <UserLists_component
          users={filteredUsers}
          handleEdit={handleEditUser}
          handleDelete={handleDeleteUser}
        /> */}
        <div className="user-cards">
          {filteredUsers.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.avatar} alt={`${user.name}'s Avatar`} />
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="post-time">{user.postTime}</div>
                <div className="content">{user.content}</div>
                {user.image && (
                  <img
                    src={user.image}
                    alt={`${user.name}'s Post`}
                    className="user-image"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
