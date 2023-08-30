import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Index = ({ closeModal, editedData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(editedData ? editedData.name : "");
  const [description, setDescription] = useState(
    editedData ? editedData.description : ""
  );
  const [uploadedImageNameProfile, setUploadedImageNameProfile] = useState(
    editedData ? editedData.Profile : null
  );
  const [hasUploadedProfile, setHasUploadedProfile] = useState(
    Boolean(editedData && editedData.Profile)
  );
  const [uploadedImageNameContent, setUploadedImageNameContent] = useState(
    editedData ? editedData.img : null
  );
  const [hasUploadedContent, setHasUploadedContent] = useState(
    Boolean(editedData && editedData.img)
  );

  useEffect(() => {
    if (editedData || isEditing) {
      setName(editedData.name);
      setDescription(editedData.description);
      setUploadedImageNameProfile(editedData.Profile);
      setHasUploadedProfile(Boolean(editedData.Profile));
      setUploadedImageNameContent(editedData.img);
      setHasUploadedContent(Boolean(editedData.img));
    }
  }, [editedData, isEditing]);

  const handleImageUploadProfile = (e) => {
    console.log("Uploading profile image...");
    const file = e.target.files[0];
    if (file) {
      console.log("Profile image selected:", file);
      setUploadedImageNameProfile(file.name);
      setHasUploadedProfile(true);
    }
  };

  const handleImageUploadCard = (e) => {
    console.log("Uploading profile image...");
    const file = e.target.files[0];
    if (file) {
      console.log("Content image selected:", file);
      setUploadedImageNameContent(file.name);
      setHasUploadedContent(true);
    }
  };

  useEffect(() => {
    const form = document.getElementById("form-add");
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const profileImg = document.getElementById("upload-img-profile");
      const contentImg = document.getElementById("upload-img-content");
      const allFiles = [...profileImg.files, ...contentImg.files];
      uploadFiles(allFiles);
    };

    if (form) {
      form.addEventListener("submit", handleFormSubmit); //remove submit event
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, []);
  // Empty
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

        console.log("Response from Cloudinary:", response);
        url.push(response.data.secure_url);
        console.log(url);
      }

      return url;
    }
  };

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(value === "");
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    setDescriptionError(value === "");
  };

  const handleSaveClick = async () => {
    setNameError(name === "");
    setDescriptionError(description === "");

    if (!name || !description) {
      return;
    }

    // Get data from local storage (if available)
    const existingData = JSON.parse(localStorage.getItem("cardData")) || [];

    // Check if existingData is not array, create an empty array
    const dataArray = Array.isArray(existingData) ? existingData : [];

    // Check and wait to upload files to Cloudinary
    const profileImg = document.getElementById("upload-img-profile");
    const contentImg = document.getElementById("upload-img-content");
    const allFiles = [...profileImg.files, ...contentImg.files];

    try {
      const uploadedUrls = await uploadFiles(allFiles);

      //  let uploadedUrls = [];

      // Check if new profile image is uploaded
      if (hasUploadedProfile) {
        uploadedUrls.push(uploadedImageNameProfile);
      } else {
        uploadedUrls.push(editedData.Profile); // Use the old profile image URL
      }

      // Check if new content image is uploaded
      if (hasUploadedContent) {
        uploadedUrls.push(uploadedImageNameContent);
      } else {
        uploadedUrls.push(editedData.img); // Use the old content image URL
      }

      // Save Name and Description to Local Storage
      const newDataItem = {
        name,
        description,
        Profile: uploadedUrls[0],
        img: uploadedUrls[1],
      };

      const updatedData = [...dataArray];

      if (editedData !== null) {
        const editedIndex = updatedData.findIndex(
          (item) => item.name === editedData.name
        );
        if (editedIndex !== -1) {
          updatedData[editedIndex] = newDataItem;
        }
      } else {
        updatedData.push(newDataItem);
      }

      localStorage.setItem("cardData", JSON.stringify(updatedData));
      resetForm();
      console.log("Thông tin đã được lưu:", newDataItem);
      closeModal();
    } catch (error) {
      console.error("Lỗi trong quá trình tải lên hình ảnh:", error);
    }
  };

  const resetForm = () => {
    setUploadedImageNameProfile(null);
    setHasUploadedProfile(false);
    setUploadedImageNameContent(null);
    setHasUploadedContent(false);
    setName("");
    setDescription("");
    setNameError(false);
    setDescriptionError(false);
  };
  return (
    <form action="" id="form-add">
      <div className={styles.newCard}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.mainContent}>
              <div className={styles.modalHeader}>Update card</div>
              <div className={styles.modalBody}>
                <div className={styles.cardText}>
                  <li className={!hasUploadedProfile ? styles.errorText : ""}>
                    Avatar
                  </li>
                  <li className={nameError ? styles.errorText : ""}>Name</li>
                  <li className={descriptionError ? styles.errorText : ""}>
                    Decription
                  </li>
                  <li className={!hasUploadedContent ? styles.errorText : ""}>
                    Image
                  </li>
                </div>
                <div className={styles.cardInput}>
                  <div className={styles.contentAvatar}>
                    <label
                      htmlFor="upload-img-profile"
                      className={`${styles.uploadLabel} ${
                        !hasUploadedProfile ? styles.errorText : ""
                      }`}>
                      {hasUploadedProfile ? (
                        <>
                          <img src="Assets/Upload_Files.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameProfile}</span>
                        </>
                      ) : (
                        <>
                          <img src="Assets/Upload_Files.svg" alt="icon_arrow" />
                          <div className={styles.decription}>Upload image</div>
                        </>
                      )}
                    </label>

                    <input
                      type="file"
                      id="upload-img-profile"
                      accept="image/*"
                      className={styles.hiddenInput}
                      onChange={handleImageUploadProfile}
                    />
                  </div>

                  <div
                    className={`${styles.cardInput} ${
                      nameError ? styles.errorInput : ""
                    }`}>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div
                    className={`${styles.cardInput} ${
                      descriptionError ? styles.errorInput : ""
                    }`}>
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}></textarea>
                  </div>

                  <div
                    className={`${styles.contentAvatar} ${styles.contentImg}`}>
                    <label
                      htmlFor="upload-img-content"
                      className={`${styles.uploadLabel} ${
                        !hasUploadedContent ? styles.errorText : ""
                      }`}>
                      {hasUploadedContent ? (
                        <>
                          <img src="Assets/Upload_Files.svg" alt="icon_arrow" />
                          <span>{uploadedImageNameContent}</span>
                        </>
                      ) : (
                        <>
                          <img src="Assets/Upload_Files.svg" alt="icon_arrow" />
                          <div className={styles.decription}>Upload image</div>
                        </>
                      )}
                    </label>

                    <input
                      type="file"
                      id="upload-img-content"
                      accept="image/*"
                      className={styles.hiddenInput}
                      onChange={handleImageUploadCard}
                    />
                  </div>

                  <div
                    className={`${styles.ContentAvatar} ${styles.contentImg}`}></div>
                </div>
              </div>
            </div>

            <div className={styles.btnClose}>
              <div className={styles.btnSave}>
                <button type="submit" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
              <div className={styles.btnCancel} onClick={closeModal}>
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
