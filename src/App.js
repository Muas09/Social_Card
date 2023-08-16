import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchAdd_component from "./components/SearchAdd_component";
import User_component from "./components/User_component";
import NotFound_component from "./components/Model_component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    setSearched(true);
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

        <div className="ModelDelete">
          <div className="contModelDelete">
            <div className="modalContent">
              <h4 className="modalTitle">You are about to delete an item</h4>
              <div className="modalBody">
                <img src="Assets/Icon_Delete.svg" alt="" />
                <p>This will delete your item from the list. Are you sure?</p>
              </div>
              <hr />
              <div className="modalDeleteFooter">
                <button className="btnSave" id="saveButton">
                  Save
                </button>
                <button className="btnCancel" id="cancelButton">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="Blog">
          <h1>SOCIAL CARD DETAIL</h1>
          <div class="postHeader">
            <img
              class="avatarBlog"
              src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg"
              alt="User Avatar"
            />
            <div class="userInfo">
              <span class="username">John Doe</span>
              <span class="post-date">August 16, 2023</span>
            </div>
          </div>
          <div class="BlogContent">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more- or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <img
            class="postImage"
            src="https://titangroup.vn/wp-content/uploads/kien-truc-cung-dinh-hue-cong-cua-2.png"
            alt="Post Image"
          />
          <div class="actionButtons">
            <div>
              <img
                class="postImage"
                src="Assets/Heart_Solid.svg"
                alt="Post Image"
              />2
            </div>
            <div>
              {" "}
              <img
                class="postImage"
                src="Assets/Message_Solid.svg"
                alt="Post Image"
              />3
            </div>
          </div>
          <div class="commentSection">
            <input class="commentInput" type="text" placeholder="" />
            <button class="postButton">Post</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
