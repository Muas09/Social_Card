import React from "react";

const UserComponent = ({ user }) => {
  return (
    <div className="post">
      <div className="UserTitle">
        <div className="AvatarUser">
          <img
            className="avatar"
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
          />
          <div className="UserName">
            <div className="username">{user.name}</div>
            <div className="datetime">{user.datetime}</div>
          </div>
        </div>
        <div className="IconEditDelete">
          <img className="IconEdit" src="Assets/Icon_Edit.svg" alt="" />
          <img className="IconDelete" src="Assets/Icon_Delete.svg" alt="" />
        </div>
      </div>
      <div className="content">{user.content}</div>
      <img className="image" src={user.image} alt={`Image related to ${user.name}`} />
    </div>
  );
};

export default UserComponent;
