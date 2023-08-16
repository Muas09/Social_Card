import React from "react";
import styles from "./style.module.css";

const AddCard = () => {
  return (
    <div className={styles.newCard}>
        <div className={styles.modalAdd}>
          <div className={styles.modalContent}>
            <div className={styles.mainContent}>
              <div className={styles.modalHeader}>Add new card</div>
              <div className={styles.mainContentodalBody}>
                <div className={styles.cardText}>
                  <li>Avatar</li>
                  <li>Name</li>
                  <li>Decription</li>
                  <li>Image</li>
                </div>
                <div className={styles.cardInput}>
                  <div className={styles.contentAvatar}>
                    <img src="Images/Upload-solid.svg" alt="" />
                    <div className={styles.decription}>Upload image</div>
                  </div>
                  <div className={styles.cardInput}>
                    <input type="text" />
                  </div>

                  <div className={styles.cardInput}>
                    <textarea></textarea>
                  </div>
                  <div className={styles.contentAvatar}>
                    <img src="Images/Upload-solid.svg" alt="" />
                    <div className={styles.decription}>Upload image</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.btnClose}>
              <div className={styles.btnSave}>Save</div>
              <div className={styles.tnCancel}>Cancel</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddCard;
