import React from "react";
import styles from "./style.module.css";

const NotFound = () => {
  return (
    <div className={styles.searchUndefined}>
      <img src="Images/Error-img.svg" alt="Error" />
      <div className={styles.textResult}>No Results Found</div>
      <div className={styles.messenger}>
        No content matched your criteria. Try searching for something else.
      </div>
    </div>
  );
};

export default NotFound;
