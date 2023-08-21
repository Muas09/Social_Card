import React from "react";
import styles from "./style.module.css";

const NotFound = () => {
  return (
    <div className={styles.searchUndefined}>
      <img src="Assets/No_Results_Found.svg" alt="Error" />
      <div className={styles.textResult}>No Results Found</div>
      <div className={styles.messenger}>
        No content matched your criteria. Try searching for something else.
      </div>
    </div>
  );
};

export default NotFound;
