import React from 'react';
import User_component from '../User_component';

const UserList = ({ users, handleEdit, handleDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <User_component
          key={user.id}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default UserList;
