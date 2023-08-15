import React, { useState } from "react";
import styles from "./style.module.css";

const SearchAddUserForm = ({ addUser, handleSearch }) => {
  const [user, setUser] = useState({ name: "", content: "", image: null });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setUser((prevUser) => ({ ...prevUser, image: imageFile }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({ name: "", content: "", image: null });
  };

  return (
    <div className={styles.SearchAddUserForm}>
      <form onSubmit={handleSubmit} className={styles.addUserForm}>
        {/* <div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Contents:</label>
            <input
              type="text"
              id="content"
              name="content"
              value={user.content}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">File Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div> */}
        <button type="submit" className={styles.submitButton}>
          Add new
        </button>
      </form>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search name"
          onChange={(e) => handleSearch(e.target.value)}
        /> <div>
          <img
              className="image"
              src="Assets/Icon_Search.svg"
              alt="Icon"
            />
        </div>
      </div>
    </div>
  );
};

export default SearchAddUserForm;
