import styles from "./style.module.css";
import Modal from "react-modal";
import React, { useState } from "react";
import ModalAdd from "../ModalAdd";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    boxShadow: "none",
    background: "none",
  },
};

const Index = ({ onSearchChange }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearchChange(searchTerm); // Gửi dữ liệu tìm kiếm lên cho component cha
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.btnAdd} onClick={openModal}>
          Add new
        </div>
        <div className={styles.search}>
          <div className={styles.searchName}>
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search"
            />
          </div>
          <div className={styles.iconSearch}>
            <img src="Assets/Icon_Search.svg" alt="" />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <ModalAdd closeModal={closeModal}></ModalAdd>
      </Modal>
    </div>
  );
};

export default Index;
