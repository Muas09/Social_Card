
import React from "react";
import styles from "./style.module.css";

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/lagos/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'moox1jnq';

const AddCard = () => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then((data) => {
        if (data.secure_url !== '') {
          const uploadedFileUrl = data.secure_url;
          localStorage.setItem('passportUrl', uploadedFileUrl);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className={styles.newCard}>
      <div className={styles.modelAdd}>
        <div className={styles.modelContent}>
          <div className={styles.mainContent}>
            <div className={styles.modalHeader}>Add new card</div>
            <div className={styles.modalBody}>
              <div className={styles.cardText}>
                <ul>
                  <li>Avatar</li>
                  <li>Name</li>
                  <li>Description</li>
                  <li>Image</li>
                </ul>
              </div>
              <div className={styles.cardInput}>
                <div className={styles.contentAvatar}>
                  <label htmlFor="fileupload"></label>
                  <input
                    className={styles.updateImage}
                    type="file"
                    id="fileupload"
                    onChange={handleImageUpload}
                  />
                </div>
                <div className={styles.cardInput}>
                  <input type="text" placeholder="Name" />
                </div>
                <div className={styles.cardInput}>
                  <textarea placeholder="Description"></textarea>
                </div>
                <div className={styles.contentAvatar}>
                  <label htmlFor="fileupload"></label>
                  <input
                    className={styles.updateImage}
                    type="file"
                    id="fileupload"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnClose}>
            <div className={styles.btnSave}>Save</div>
            <div className={styles.btnCancel}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
