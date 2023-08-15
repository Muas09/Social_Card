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
