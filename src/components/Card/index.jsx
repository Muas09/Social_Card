import React, { useState } from "react";
import styles from "./style.module.css";
import { getData } from './Data';
import Navbar from "../Navbar";
import Modal from "react-modal";
import ModalAdd from "../ModalAdd"; // Import your ModalAdd component
import ModalDelete from "../ModalDelete"; // Import your ModalDelete component

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
  const data = getData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setShowDeleteModal(false); // Close delete modal as well
  };

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

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
                  <img src="Assets/Icon_Edit.svg" alt="Edit" onClick={handleUpdateClick} />
                </div>
                <div className={styles.deleteIcon}>
                  <img src="Assets/Icon_Card_Delete.svg" alt="Delete" onClick={handleDeleteClick} />
                </div>
              </div>
            </div>
            <div className={`${styles.description} ${index === 2 ? styles.descriptionMio : ''}`}>{item.description}</div>
            <div className={styles.img}>
              <img src={item.img} alt="Image" />
            </div>
          </div>
        ))}
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
        <Modal
          isOpen={showDeleteModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Delete Modal"
          className={styles.customModal}
          overlayClassName={styles.customOverlay}
        >
          <ModalDelete onClose={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Index;
