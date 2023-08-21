import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const Index = () => {
  const [heartCount, setHeartCount] = useState(0);
  const [messageCount, setMessageCount] = useState(2);
  const [newComment, setNewComment] = useState(""); // State lưu nội dung bình luận mới
  const [comments, setComments] = useState([]); // State lưu danh sách bình luận

  // Effect để lưu trạng thái vào local storage khi có thay đổi
  useEffect(() => {
    localStorage.setItem("heartCount", heartCount);
    localStorage.setItem("messageCount", messageCount);
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [heartCount, messageCount, comments]);

  const handleHeartClick = () => {
    setHeartCount(prevCount => prevCount + 1);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const now = new Date();
      const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const commentObject = { content: newComment, date: formattedDate };
      
      setComments(prevComments => [...prevComments, commentObject]); // Thêm bình luận mới vào danh sách
      setMessageCount(prevCount => prevCount + 1); // Tăng số lượng icon message
      setNewComment(""); // Reset nội dung bình luận mới
    }
  };

  // Effect để khôi phục trạng thái từ local storage khi load lại trang
  useEffect(() => {
    const savedHeartCount = parseInt(localStorage.getItem("heartCount")) || 0;
    const savedMessageCount = parseInt(localStorage.getItem("messageCount")) || 2;
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    setHeartCount(savedHeartCount);
    setMessageCount(savedMessageCount);
    setComments(savedComments);
  }, []);
  return (
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
          id="heartIcon"
          onClick={handleHeartClick}>
          <img src="Assets/Icon_Heart.svg" alt="" />{" "}
          <span id="heartCount">{heartCount}</span>
        </div>

        <div className={styles.iconMessage} onClick={handlePostComment}>
          <img src="Assets/Icon_Message.svg" alt="" />
          {messageCount}
        </div>
      </div>

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
      <div className={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <div className={styles.dayComment}>  {comment.date} (day create)</div>
            <div className={styles.messageComment}>{comment.content}</div>
          </div>
        ))}
      </div>

      <div className={styles.postComment}>
        <div className={styles.textPost}>Post a new coment</div>
        <textarea
          className={styles.commentTextarea}
          type="text"
          placeholder=" Add comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <div className={styles.btnPost} onClick={handlePostComment}>
          Post
        </div>
      </div>
      
    </div>
  );
};

export default Index;
