import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchAdd_component from "./components/SearchAdd_component";
import User_component from "./components/User_component";
import NotFound_component from "./components/NotFound_component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
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
        <div className="titleCard">LIST SOCIAL CARD</div>
        <SearchAdd_component addUser={handleAddUser} />
        <div className="postUser">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <User_component key={index} user={user} />
            ))
          ) : (
            <NotFound_component />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
