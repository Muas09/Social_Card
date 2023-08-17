import React from "react";
import styles from "./style.module.css";

const DeleteCard = () => {
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
            <div className={styles.btnSave}>Delete</div>
            <div className={styles.btnCancel}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
