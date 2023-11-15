import React from "react";
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.parentComment}>
        <div className={styles.userInfo}>
        <img src="path/to/user-photo.jpg" alt="User Photo" />
        <div>
          <p>John Doe</p>
          <span>November 15, 2023</span>
        </div>
      </div>
        Great photo
      </div>
      
    <div className={styles.replyContainer}>
        
        <div className={styles.replyInfo}>
          <img src="path/to/user-photo.jpg" alt="User Photo" />
          <div>
          <p>Bad user</p>
          <span>November 15, 2023</span>
          </div>
          
        </div>
        <div className={styles.replyText}>
          No
        </div>
      </div>
   
      

      {/* Add more replies as needed */}

      <div className={styles.addReply}>Add a Reply...</div>
    </div>
  );
};

export default Comment;