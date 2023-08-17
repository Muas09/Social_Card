import React from "react";
import styles from "./style.module.css";

const AddCard = () => {
  return (
    <div className={styles.newCard}>
      <div className={styles.modelAdd}>
        <div className={styles.modelContent}>
          <div className={styles.mainContent}>
            <div className={styles.modalHeader}>Add new card</div>
            <div className={styles.modalBody}>
              <div className={styles.cardText}>
                <li>Avatar</li>
                <li>Name</li>
                <li>Decription</li>
                <li>Image</li>
              </div>
              <div className={styles.cardInput}>
                <div className={styles.contentAvatar}>
                  <img src="Assets/upload_Files.svg" alt="" />
                  <div className={styles.decription}>Upload image</div>
                </div>
                <div className={styles.cardInput}>
                  <input type="text" />
                </div>

                <div className={styles.cardInput}>
                  <textarea></textarea>
                </div>
                <div className={styles.contentAvatar}>
                  <img src="Assets/upload_Files.svg" alt="" />
                  <div className={styles.decription}>Upload image</div>
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
