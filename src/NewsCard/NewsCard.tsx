import React from "react";
import styles from "./NewsCard.module.css";
import { NewsCardProps } from "./NewsCard.interface";




const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, image, publishDate })=>{
  
  
  return (
    <div className={styles.newsCard}>

    <h1>{title}</h1>

      <div className={styles.newsImgDiv}>
        <img alt="No img" src={image} className={styles.image2}></img>
      </div>
      
        <p className={styles.newsCardParag}>
          {content}
        </p>
        <p>{publishDate}</p>
        <a href="#" className={styles.readMore}>Read more</a>
      
    </div>
  );
}

export default NewsCard