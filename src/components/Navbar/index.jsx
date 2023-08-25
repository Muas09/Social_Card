import styles from "./style.module.css";
import Modal from "react-modal";
import React from "react";
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

const Index = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
            <input type="text" placeholder="Search name..." />
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
