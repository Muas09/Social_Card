import React, { useState } from "react";
import styles from "./style.module.css";

const Index = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    
    <div>
      
      <div className={styles.navbar}>
      <div className={styles.btnAdd}>Add new</div>
      <div className={styles.btnSearch}>
        <div className={styles.searchName}>
          <input
            type='text'
            placeholder='Search name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.iconSearch}>
          <img
            src='Assets/Icon_Search.svg'
            alt=''
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;
