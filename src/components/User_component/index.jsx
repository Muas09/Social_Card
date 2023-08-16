import React from "react";
import styles from "./style.module.css";

const UserComponent = ({ user }) => {
  return (
    <div className={styles.post}>
      <div className={styles.UserTitle}>
        <img
          className={styles.avatar}
          src="Assets/Avatar_PhuNguyen.svg"
          alt="Avatar 1"
        />
        <div className={styles.UserName}>
          <div className={styles.username}>Phu Nguyen</div>
          <div className={styles.datetime}>14/08/2023</div>
        </div>
        <div className={styles.IconEditDelete}>
          <img className={styles.IconEdit} src="Assets/Icon_Edit.svg" alt="" />
          <img className={styles.IconDelete} src="Assets/Icon_Delete.svg" alt="" />

        </div>
        <div className={styles.content}>
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.{" "}
        </div>
        <img className={styles.image} src="Assets/Image_Cat.svg" alt="Image 1" />
      </div>
{/* ---------------------------------------------------- */}
      <div className={styles.post}>
        <div className={styles.UserTitle}>
          <div className={styles.AvatarUser}>
            <img
              className={styles.avatar}
              src={user.avatar}
              alt={`Avatar of ${user.name}`}
            />
            <div className={styles.UserName}>
              <div className={styles.username}>{user.name}</div>
              <div className={styles.datetime}>{user.datetime}</div>
            </div>
          </div>
          <div className={styles.IconEditDelete}>
            <img className={styles.IconEdit} src="Assets/Icon_Edit.svg" alt="" />
            <img className={styles.IconDelete} src="Assets/Icon_Delete.svg" alt="" />
          </div>
        </div>
        <div className={styles.content}>{user.content}</div>
        <img className={styles.image} src={user.image} alt={`Image related to ${user.name}`} />
      </div> </div>
      );
};

      export default UserComponent;
