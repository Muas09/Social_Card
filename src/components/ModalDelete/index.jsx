import React, { useState } from "react";
import styles from "./style.module.css";

const DeleteCard = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCancelClick = () => {
    setModalVisible(false); 
  };

  return (
    <div className={styles.deleteCard}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.mainContent}>
            <div className={styles.modalHeader}>
              Your about to delete a item
            </div>
            <div className={`${styles.modalBody} ${styles.deleteBody}`}>
              <img src="Assets/Icon_Delete.svg" alt="" />
              <div className={styles.decriptionDelete}>
                This will delete your item form list<br></br> Are you sure?
              </div>
            </div>
          </div>

          <div className={styles.btnClose}>
            <button className={styles.btnSave}>Delete</button>
            <button className={styles.btnCancel} onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
