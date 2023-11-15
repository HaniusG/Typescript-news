import React from 'react'
import styles from './Comments.module.css'
import Comment from 'components/Comment'
import { CommentProps } from './Comment.interface'


const Comments: React.FC<CommentProps>= ({comments}) => {
  return (
    <div className={styles.commentsTab}>
      <h2>Comments</h2>
      <ul className={styles.commentsList}>
        <li className={styles.comment}><Comment/></li>
        <li className={styles.comment}>Comment 2</li>
        <li className={styles.comment}>Comment 3</li>
      </ul>
    </div>
  )
}

export default Comments;
