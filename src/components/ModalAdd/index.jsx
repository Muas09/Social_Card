import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";

const Index = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const form = document.getElementById("form-add");
    const profileImg = document.getElementById("fileupload");

    if (form && profileImg) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const uploadedUrls = await uploadFiles(files);
        console.log(uploadedUrls);
      });
    }
  }, [files]);

  // const handleImageUpload = (event) => {
  //   const fileList = event.target.files;
  //   setFiles([...fileList]);
  // };

  const uploadFiles = async (files) => {
    if (files.length > 0) {
      const CLOUD_NAME = "dgyrw4fbm";
      const PRESET_NAME = "socialCard";
      const FOLDER_NAME = "Social_Card";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const uploadedUrls = [];

      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        });

        uploadedUrls.push(response.data.secure_url);
      }

      return uploadedUrls;
    }

    return [];
  };

  // const handleSave = () => {
  //   if (name && description && imageURL) {
  //     const newItem = {
  //       profile: imageURL,
  //       name,
  //       description,
  //       img: imageURL,
  //     };
  //     onSave(newItem);
  //   }
  // };

  return (
    <form action="" id="form-add">
      <div className={styles.newCard}>
        <div className={styles.modelAdd}>
          <div className={styles.modelContent}>
            <div className={styles.mainContent}>
              <div className={styles.modalHeader}>Add new card</div>
              <div className={styles.modalBody}>
                <div className={styles.cardText}>
                  <ul>
                    <li>Avatar</li>
                    <li>Name</li>
                    <li>Description</li>
                    <li>Image</li>
                  </ul>
                </div>
                <div className={styles.cardInput}>
                  <div className={styles.contentAvatar}>
                    <img src="Images/Upload-solid.svg" alt="" />
                    <div className={styles.Decription}>Upload image</div>
                    {/* <label htmlFor="fileupload"></label>
                    <input
                      className={styles.updateImage}
                      type="file"
                      id="fileupload"
                      placeholder="Description"
                      onChange={handleImageUpload}
                    /> */}
                  </div>
                  <div className={styles.cardInput}>
                    <input type="text" />
                    {/* <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    /> */}
                  </div>
                  <div className={styles.cardInput}>
                    <textarea></textarea>
                    {/* <textarea
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    /> */}
                  </div>
                  <div className={styles.contentAvatar}>
                  <img src="Images/Upload-solid.svg" alt="" />
                    <div className={styles.Decription}>Upload image</div>
                    {/* <label htmlFor="fileupload"></label>
                    <input
                      className={styles.updateImage}
                      type="file"
                      id="fileupload"
                      onChange={handleImageUpload}
                    /> */}
                  </div>
                  <div className={`${styles.ContentAvatar} ${styles.ContentImg}`}>
                    <input type="file" id="profile-img" multiple />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btnClose}>
              <div className={styles.btnSave}>
                <button type="submit">Save</button>
              </div>
              <div className={styles.btnCancel}  onClick={closeModal}>Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
