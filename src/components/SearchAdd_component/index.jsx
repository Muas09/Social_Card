import React, { useState } from "react";
import styles from "./style.module.css";

const SearchAddUserForm = ({ addUser, handleSearch }) => {
  const [user, setUser] = useState({ name: "", content: "", image: null });
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  return (
    <div >
     <div className={styles.SearchAddUserForm}>
     <form onSubmit={handleSubmit} className={styles.addUserForm}>
        <button type="submit" className={styles.submitButton}>
          Add new
        </button>
      </form>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search name..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div>
          <img
            className={styles.IconSearch}
            src="Assets/Icon_Search.svg"
            alt="Icon"
          />
        </div>
      </div>
     </div>
      {/* {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h4 className={styles.modalTitle}>Add New User</h4>
            <div className={styles.modalBody}>
              <form className={styles.formInput}>
                <div className={styles.TitleContainer}>
                  <label htmlFor="avatar">Avatar*</label>
                  <label htmlFor="username">Name *</label>
                  <label htmlFor="content">Description*</label>
                  <label htmlFor="image">Image*</label>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="avatar" className={styles.avatarLabel}>
                    <img
                      src="upload_Files.svg"
                      alt=""
                      className={styles.icon}
                    />
                    Upload Avatar
                  </label>
                  <input
                    type="text"
                    id={styles.username}
                    name="name"
                    placeholder=""
                    onChange={handleInputChange}
                    value={user.name}
                  />
                  <textarea
                    id={styles.content}
                    name="content"
                    placeholder=""
                    onChange={handleInputChange}
                    value={user.content}></textarea>
                  <label htmlFor="image" className={styles.avatarLabel}>
                    <img
                      src="upload_Files.svg"
                      alt=""
                      className={styles.icon}
                    />
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id={styles.image}
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </form>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.btnSave} id="saveButton">
                Save
              </button>
              <button
                className={styles.btnCancel}
                id="cancelButton"
                onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}
      <div>
        <div className={styles.NotFound}>
          <img
            className={styles.imageNot_Found}
            src="Assets/No_Results_Found.svg"
            alt="Not found"
          />
          <div>
            <p className={styles.Results}>No Results Found</p>
            <p className={styles.NoContent}>
              No content matched your criteria. Try searching for something
              else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAddUserForm;
