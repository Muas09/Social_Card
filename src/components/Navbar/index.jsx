import React, { useState } from "react";
import styles from "./style.module.css";
import ModalAdd from "../ModalAdd";
import Modal from "react-modal"; // Don't forget to import Modal

const customStyles = {
  content: {
    width: "514px",
    height: "379px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "1px solid #D2CBCB",
    overflow: "none",
    background: "#FFFFFF",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "10px",
    opacity: 1,
  },
};


const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Initialize searchTerm

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    // Perform search logic using 'searchTerm'
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <button onClick={handleUpdateClick} className={styles.btnAdd}>
          Add new
        </button>
        <div className={styles.btnSearch}>
          <div className={styles.searchName}>
            <input
              type="text"
              placeholder="Search name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.iconSearch}>
            <img
              src="Assets/Icon_Search.svg"
              alt=""
              onClick={handleSearch}
            />
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add New Modal"
            className={styles.customModal}
            overlayClassName={styles.customOverlay}
          >
            <ModalAdd onClose={closeModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Index;
