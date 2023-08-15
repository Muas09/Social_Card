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

  const handleEditUser = (editedUser) => {};

  const handleDeleteUser = (userToDelete) => {};

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
        <div className="user-lists">
          {/* <UserLists_component
              users={filteredUsers}
              handleEdit={handleEditUser}
              handleDelete={handleDeleteUser}
            /> */}
          {/* Render the social cards here */}
        </div>

        <div className="postUser">
          <div className="post">
            <div className="UserTitle">
              <img
                className="avatar"
                src="Assets/Avatar_PhuNguyen.svg"
                alt="Avatar 1"
              />
              <div className="UserName">
                <div className="username">Phu Nguyen</div>
                <div className="datetime">14/08/2023</div>
              </div>
              <img className="IconEdit" src="Assets/Icon_Edit.svg" alt="" />
              <img className="IconDelete" src="Assets/Icon_Delete.svg" alt="" />
            </div>
            <div className="content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </div>
            <img className="image" src="Assets/Image_Cat.svg" alt="Image 1" />
          </div>

          <div className="post">
            <div className="UserTitle">
              <img
                className="avatar"
                src="Assets/Avatar_varen.svg"
                alt="Avatar 2"
              />
              <div>
                <div className="username">Varen</div>
                <div className="datetime">14/08/2023</div>
              </div>
              <img className="IconEdit" src="Assets/Icon_Edit.svg" alt="" />
              <img className="IconDelete" src="Assets/Icon_Delete.svg" alt="" />
            </div>
            <div className="content">
              Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các
              thông tin: Avatar, Name, Description, Image
            </div>
            <img
              className="image"
              src="Assets/Image_children.svg"
              alt="Image 2"
            />
          </div>

          <div className="post">
            <div className="UserTitle">
              <img className="avatar" src="Assets/Avatar_Mio.svg" />
              <div>
                <div className="username">Mio</div>
                <div className="datetime">14/08/2023</div>
              </div>
              <img className="IconEdit" src="Assets/Icon_Edit.svg" alt="" />
              <img className="IconDelete" src="Assets/Icon_Delete.svg" alt="" />
            </div>
            <div className="content">
              Next, you select one property. It doesn’t matter which one you
              choose, yet it’s best to pick one that seems totally unrelated to
              your challenge.
            </div>
            <img
              className="image"
              src="Assets/Image_elephant.svg"
              alt="Image 3"
            />
          </div>
        </div>
        <div className="NotFound">
          <img
            className="image"
            src="Assets/No_Results_Found.svg"
            alt="Not found"
          />
          <div>
            <p className="Results">No Results Found</p>
            <p className="No_Content">
              No content matched your criteria. Try searching for something
              else.
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
