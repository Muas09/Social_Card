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
    const profileImg = document.getElementById("profile-img");
    console.log("Form element:", form);
    console.log("Profile image element:", profileImg);

    if (form && profileImg) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        uploadFiles(profileImg.files);
         console.log(profileImg.files);
      });
    }
  }, []);

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    setFiles([...fileList]);
  };

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dgyrw4fbm";
      const PRESET_NAME = "Social_img";
      const url = [];
      const FOLDER_NAME = "Social_Card";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;


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

        url.push(response.data.secure_url);
      }

      return url;
    }

  };


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
                  {/* <div className={styles.contentAvatar}>
                    <img src="Assets/Upload_Files.svg" alt="" />
                    <div className={styles.Decription}>Upload image</div>
                    <label htmlFor="fileupload"></label>
                    <input
                      className={styles.updateImage}
                      type="file"
                      id="fileupload"
                      placeholder="Description"
                      onChange={handleImageUpload}
                    />
                  </div> */}
                  <div
                    className={`${styles.contentAvatar} ${styles.ContentImg}`}>
                    <input type="file" id="profile-img" multiple onChange={handleImageUpload}/>
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
                    {/* <img src="Assets/Upload_Files.svg" alt="" />
                    <div className={styles.decription}>Upload image</div>
                    <label htmlFor="fileupload"></label>
                    <input
                      className={styles.updateImage}
                      type="file"
                      id="fileupload"
                      onChange={handleImageUpload}
                    /> */}
                  </div>
                  <div
                    className={`${styles.contentAvatar} ${styles.ContentImg}`}>
                    <input type="file" id="profile-img" multiple onChange={handleImageUpload}/>
                  </div>
                </div>
              </div>
            </div>
            <div  className={styles.btnClose}>
              <div >
                <button className={styles.btnSave} type="submit" >Save</button>
              </div>
              <div >
              <button className={styles.btnCancel} onClick={closeModal} >Cancel</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;

