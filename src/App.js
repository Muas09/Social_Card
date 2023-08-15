import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchAdd_component from "./components/SearchAdd_component";
import UserLists_component from "./components/UserLists_component"; // Import this component if it's defined elsewhere

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
        <div className="user-lists">
          {/* <UserLists_component
              users={filteredUsers}
              handleEdit={handleEditUser}
              handleDelete={handleDeleteUser}
            /> */}
          {/* Render the social cards here */}</div>

          <div className="post_user">
            <div className="post">
            <img className="avatar" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg" alt="Avatar 1" />
              <div className="username">User 1</div>
              <div className="datetime">August 14, 2023</div>
              <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <img className="image" src="https://catscanman.net/wp-content/uploads/2023/02/meme-buon-ngu-2-1024x670.png" alt="Image 1" />
            </div>

            <div className="post">
            <img className="avatar" src="https://bookvexe.vn/wp-content/uploads/2023/04/chon-loc-25-hinh-anh-avatar-bua-cute-dang-yeu-nhat_1.jpg" alt="Avatar 2" />
              <div className="username">User 2</div>
              <div className="datetime">August 14, 2023</div>
              <div className="content">Pellentesque nec turpis vel dui fringilla cursus.</div>
            <img className="image" src="https://afamilycdn.com/150157425591193600/2020/5/25/90090530211769606724281311815109567084919n-1590403790698636845403.jpg" alt="Image 2" />
            </div>

            <div className="post">
              <img className="avatar" src="data:image/jpeg;base64,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" alt="Avatar 3" />
              <div className="username">User 3</div>
              <div className="datetime">August 14, 2023</div>
              <div className="content">Sed sit amet arcu vitae ligula ultrices condimentum.</div>
            <img className="image" src="https://nhadepso.com/wp-content/uploads/2023/02/top-30-hinh-anh-meo-buon-khoc-co-don-dang-yeu-nhat-the-gioi_16.jpg" alt="Image 3" />
            </div>
  </div>
      </div>
    </Router>
  );
};

export default App;
