
import React, { useState } from "react";
import styles from "./style.module.css";
import { getData, getLocalData } from "./Data";
import Modal from "react-modal";

import ModalUpdate from "../ModalUpdate";
import ModalDelete from "../ModalDelete";
import { format } from "date-fns";

// import { Link } from "react-router-dom";
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
  const data = getData();
  const dataLocal = getLocalData();
  console.log(dataLocal);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false);

  const [editedData, setEditedData] = useState(null);
  // Kiểm tra kiểu dữ liệu của dataLocal
  if (!Array.isArray(dataLocal)) {
    console.error("dataLocal không phải là một mảng");
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setModalDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setModalDeleteIsOpen(false);
  }

  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const handleDeleteContent = async (index) => {
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(index, 1);

    localStorage.setItem("cardData", JSON.stringify(newDataLocal));

    setDeleteIndex(newDataLocal);

    closeDeleteModal();
  };

  return (
    <div className={styles.body}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <ModalUpdate
          closeModal={closeModal}
          editedData={editedData}></ModalUpdate>
      </Modal>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Delete Modal">
        <ModalDelete
          closeModal={closeDeleteModal}
          deleteContent={() => handleDeleteContent(deleteIndex)}></ModalDelete>
      </Modal>
      <div className={styles.body}>
        {data.map((item, index) => (
          <div className={styles.content}>
            <div key={index} className={styles.header}>
              <a href="/Detail">
                <div className={styles.profile}>
                  <img src={item.Profile} alt={item.name} />
                  <div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.date}>{item.date}</div>
                  </div>
                </div>
              </a>
              <div className={styles.icon}>
                <div className={styles.editIcon}>
                  <img
                    onClick={openModal}
                    src="Assets/Icon_Edit.svg"
                    alt="Edit"
                  />
                </div>
                <div className={styles.deleteIcon}>
                  <img
                    onClick={openDeleteModal}
                    src="Assets/Icon_Card_Delete.svg"
                    alt="Delete"
                  />
                </div>
              </div>
            </div>
            <a href="Detail">
              <div
                className={`${styles.description} ${
                  index === 2 ? styles.descriptionMio : ""
                }`}>
                {item.description}
              </div>
              <div className={styles.img}>
                <img src={item.img} alt="Image" />
              </div>
            </a>
          </div>
        ))}

        {dataLocal.map((item, index) => (
          <div className={styles.content} key={index}>
            <div className={styles.header}>
              <a href="/Detail">
                <div className={styles.profile}>
                  <img src={item.Profile} alt={item.name} />
                  <div>
                    <div className={styles.name}>{item.name} </div>
                    <div className={styles.date}>
                      {format(new Date(), "dd/MM/yyyy")}
                    </div>
                  </div>
                </div>
              </a>
              <div className={styles.icon}>
                <div className={styles.editIcon}>
                  <img
                    onClick={() => {
                      setEditedData(item);
                      openModal();
                    }}
                    src="Assets/Icon_Edit.svg"
                    alt="Edit"
                  />
                </div>
                <div className={styles.deleteIcon}>
                  <img
                    onClick={() => {
                      openDeleteModal(); // Open the delete modal
                      setDeleteIndex(index); // Set the index to be deleted
                    }}
                    src="Assets/Icon_Card_Delete.svg"
                    alt="Delete"
                  />
                </div>
              </div>
            </div>
            <a href="/Detail">
              <div
                className={`${styles.description} ${
                  index === 2 ? styles.descriptionMio : ""
                }`}>
                {item.description}
              </div>
              <div className={styles.img}>
                <img src={item.img} alt="Image" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;








// import React, { useState } from "react";
// import styles from "./style.module.css";
// import { getData, getLocalData } from "./Data";
// import Modal from "react-modal";

// import ModalUpdate from "../ModalUpdate";
// import ModalDelete from "../ModalDelete";
// import { format } from "date-fns";
// import NotFound from "../NotFound";

// // import { Link } from "react-router-dom";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: "0px",
//     border: "none",
//     boxShadow: "none",
//     background: "none",
//   },
// };

// const Index = ({ searchTerm }) => {
//   const data = getData();
//   const dataLocal = getLocalData();
//   console.log(dataLocal);

//   const filteredData = dataLocal.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false);

//   const [editedData, setEditedData] = useState(null);
//   // Kiểm tra kiểu dữ liệu của dataLocal
//   if (!Array.isArray(dataLocal)) {
//     console.error("dataLocal không phải là một mảng");
//   }
//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openDeleteModal() {
//     setModalDeleteIsOpen(true);
//   }

//   function closeDeleteModal() {
//     setModalDeleteIsOpen(false);
//   }

//   const [deleteIndex, setDeleteIndex] = React.useState(null);
//   const handleDeleteContent = async (index) => {
//     const newDataLocal = [...dataLocal];
//     newDataLocal.splice(index, 1);

//     localStorage.setItem("cardData", JSON.stringify(newDataLocal));

//     setDeleteIndex(newDataLocal);

//     closeDeleteModal();
//   };

//   return (
//     <div className={styles.body}>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal">
//         <ModalUpdate
//           closeModal={closeModal}
//           editedData={editedData}></ModalUpdate>
//       </Modal>

//       <Modal
//         isOpen={modalDeleteIsOpen}
//         onRequestClose={closeDeleteModal}
//         style={customStyles}
//         contentLabel="Delete Modal">
//         <ModalDelete
//           closeModal={closeDeleteModal}
//           deleteContent={() => handleDeleteContent(deleteIndex)}></ModalDelete>
//       </Modal>
//       <div className={styles.body}>
//         {filteredData.length === 0 && searchTerm !== "" ? (
//           <NotFound /> // Show NotFound component if no results are found
//         ) : (
//           filteredData.map((item, index) => (
//             <div className={styles.content} key={index}>
//               <div className={styles.header}>
//                 <a href="/Detail">
//                   <div className={styles.profile}>
//                     <img src={item.Profile} alt={item.name} />
//                     <div>
//                       <div className={styles.name}>{item.name}</div>
//                       <div className={styles.date}>
//                         {" "}
//                         {format(new Date(), "dd/MM/yyyy")}
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <div className={styles.icon}>
//                   <div className={styles.editIcon}>
//                     <img
//                       onClick={() => {
//                         setEditedData(item);
//                         openModal();
//                       }}
//                       src="Assets/Icon_Edit.svg"
//                       alt="Edit"
//                     />
//                   </div>
//                   <div className={styles.deleteIcon}>
//                     <img
//                       onClick={() => {
//                         openDeleteModal(); // Open the delete modal
//                         setDeleteIndex(index); // Set the index to be deleted
//                       }}
//                       src="Assets/Icon_Card_Delete.svg"
//                       alt="Delete"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <a href="Detail">
//                 <div
//                   className={`${styles.description} ${
//                     index === 2 ? styles.descriptionMio : ""
//                   }`}>
//                   {item.description}
//                 </div>
//                 <div className={styles.img}>
//                   <img src={item.img} alt="Image" />
//                 </div>
//               </a>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Index;