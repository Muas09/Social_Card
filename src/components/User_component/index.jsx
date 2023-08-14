import React from 'react';
import styles from "./style.module.css";

const User = ({ user, handleEdit, handleDelete }) => {
  return (
    <div className={styles.userContainer}>
      <img src={user.image} alt={user.name} className={styles.userImage} />
      <div className={styles.userDetails}>
        <h2 className={styles.userName}>{user.name}</h2>
        <p className={styles.userDate}>{user.date}</p>
        <p className={styles.userContent}>{user.content}</p>
        <div className={styles.userButtons}>
          <button onClick={() => handleEdit(user)}>Sửa</button>
          <button onClick={() => handleDelete(user)}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default User;
