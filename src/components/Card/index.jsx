import React from "react";
import styles from "./style.module.css";
import { getData } from './Data';
import Navbar from "../Navbar"

const Index = () => {
  const data = getData();

  return (
    <div>
      <Navbar />
      <div className={styles.body}>
      {data.map((item, index) => (
        <div key={index} className={styles.content}>
          <div className={styles.header}>
            <div className={styles.profile}>
              <img src={item.profile} alt={item.Name} />
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.birthday}>{item.birthday}</div>
              </div>
            </div>
            <div className={styles.icon}>
              <div className={styles.editIcon}>
                <img src="Assets/Icon_Edit.svg" alt="Edit" />
              </div>
              <div className={styles.deleteIcon}>
                <img src="Assets/Icon_Card_Delete.svg" alt="Delete" />
              </div>
            </div>
          </div>
          <div className={`${styles.description} ${index === 2 ? styles.descriptionMio : ''}`}>{item.description}</div>
          <div className={styles.img}>
            <img src={item.img} alt="Image" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Index;
