import React from "react";
import styles from "./style.module.css";

const Index = () => {
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
        <div className={styles.iconHeart}>
          <img src="Assets/Icon_Heart.svg" alt="" />2
        </div>

        <div className={styles.iconMessage}>
          <img src="Assets/Icon_Message.svg" alt="" />2
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

      <div className={styles.postComment}>
        <div className={styles.textPost}>Post a new coment</div>
        <textarea
          className={styles.commentTextarea}
          type="text"
          placeholder=" Add comment..."
        />

        <div className={styles.btnPost}>Post</div>
      </div>
    </div>
  );
};

export default Index;
