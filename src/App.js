import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchAdd_component from "./components/SearchAdd_component";
import User_component from "./components/User_component";
import NotFound_component from "./components/NotFound_component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false); // Thêm state để theo dõi việc đã thực hiện tìm kiếm hay chưa

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    setSearched(true); // Đã thực hiện tìm kiếm
  };

  return (
    <Router>
      <div className="container">
        <div className="titleCard">LIST SOCIAL CARD</div>
        <SearchAdd_component addUser={handleAddUser} onSearch={handleSearch} />
        <div className="postUser">
          {searched && filteredUsers.length === 0 ? (
            <NotFound_component />
          ) : (
            filteredUsers.map((user, index) => (
              <User_component key={index} user={user} />
            ))
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
