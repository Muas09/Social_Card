import styles from "./style.module.css";
import React, { useEffect, useState } from "react";

const Index = ({ setShowContainer }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn người dùng nhập xuống dòng trong textarea
      handlePostClick(); // Thực hiện post comment khi nhấn Enter
    }
  };

  useEffect(() => {
    setShowContainer(false); // Hide Container in CardDetail page
    return () => {
      setShowContainer(true); // Reset when leaving CardDetail page
    };
  }, [setShowContainer]);

  useEffect(() => {
    const existingComments = JSON.parse(
      localStorage.getItem("comments") || "[]"
    );
    setMessageCount(existingComments.length);
  }, []);

  // const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [inputComment, setInputComment] = useState(""); // Biến mới để lưu nội dung comment trong ô input
  const handleCommentChange = (event) => {
    const value = event.target.value;
    setInputComment(value); // Sử dụng biến newComment thay cho comment
    setCommentError(value === "");
  };

  const handlePostClick = () => {
    if (!commentError && inputComment !== "") {
      setIsCommentPosted(true);

      // Lưu comment vào local storage
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
      const newComment = {
        dayCreate: formattedDate,
        content: inputComment,
      };

      // Lấy danh sách các comment từ local storage (nếu đã có)
      const existingComments = JSON.parse(
        localStorage.getItem("comments") || "[]"
      );

      // Thêm comment mới vào danh sách
      existingComments.push(newComment);

      // Lưu lại danh sách comment vào local storage
      localStorage.setItem("comments", JSON.stringify(existingComments));

      // Cập nhật số lượng comment và thực hiện các xử lý khác khi post thành công
      setMessageCount(existingComments.length); // Cập nhật số lượng comment
      setCommentError(false);
      setInputComment("");
    } else {
      setIsCommentPosted(false);
    }
  };

  // Số lượt nhấn mặc định là 2
  const [heartCount, setHeartCount] = useState(1);
  const [messageCount, setMessageCount] = useState(2);
  const [isCommentPosted, setIsCommentPosted] = useState(false);

  return (
    <div>
      <div>
        <div className="title">LIST SOCIAL CARD</div>
      </div>
      <div className={styles.container}>
      <div className={styles.profileDetail}>
        <img src="Assets/Avatar_PhuNguyen.svg" alt="" />
        <div>
          <div className={styles.profileName}>Binance</div>
          <div className={styles.dayCreate}>22/04/2021 (day create)</div>
        </div>
      </div>
      <div className={styles.content}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more- or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>

      <img
        className={styles.contentImg}
        src="https://xedulichhue.com/wp-content/uploads/2018/07/dai-noi-hue-co-bao-nhieu-cua.jpg"
        alt=""
      />

      <div className={styles.icon}>
        <div
          className={styles.iconHeart}
          onClick={() => setHeartCount(heartCount + 1)}>
          <img src="Assets/Icon_Heart.svg" alt="" />{" "}
          <span id="heartCount">{heartCount}</span>
        </div>

        <div
          className={styles.iconMessage}
          onClick={() => isCommentPosted && setMessageCount(messageCount + 1)}>
          <img src="Assets/Icon_Message.svg" alt="" />
          {messageCount}
        </div>
      </div>

      {/* <div className={styles.contentComment}>
        <div className={styles.dayComment}>22/04/2021 (day create)</div>
        <div className={styles.messageComment}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English.
        </div>
      </div> */}

      <div className={styles.contentComment}>
        <div className={styles.dayComment}>22/04/2021 (day create)</div>
        <div className={styles.messageComment}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English.
        </div>
      </div>
      <div>
        {localStorage.getItem("comments") &&
          JSON.parse(localStorage.getItem("comments"))
            .reverse() // Đảo ngược mảng các comment
            .map((comment, index) => (
              <div
                className={`${styles.comment} ${styles.contentComment}`}
                key={index}>
                <div className={styles.dayCreate}>
                  {comment.dayCreate} (day create)
                </div>
                <div className={styles.Content}>{comment.content}</div>
              </div>
            ))}

        {/* <div className={styles.ContentComment}>
          <div className={styles.DayComment}>22/04/2021 (day create)</div>
          <div className={styles.MessageComment}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more- or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div> */}
      </div>

      <div className={styles.postComment}>
        <div className={styles.textPost}>Post a new coment</div>
        <textarea
          onKeyDown={handleKeyPress}
          value={inputComment}
          onChange={handleCommentChange}
          className={`${styles.commentTextarea} ${
            commentError ? styles.errorPost : ""
          }`}
          type="text"
          placeholder=" Add comment..."
        />

        <button
          className={styles.btnPost}
          type="submit"
          onClick={handlePostClick}>
          Post
        </button>
      </div>
    </div>
    </div>
  );
};

export default Index;
// import React from "react";
