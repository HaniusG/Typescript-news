import React from "react";
import styles from "./NewsCard.module.css";

interface News  {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
  pubDate: string;
}

type PrivateProps = {
  data: News
}

export default function NewsCard({data}: PrivateProps) {
  
  
  return (
    <div className={styles.newsCard}>

    <h1>{data.title}</h1>

      <div className={styles.newsImgDiv}>
        <img alt="No image" src={data.imageUrl} className={styles.image2}></img>
      </div>
      
        <p className={styles.newsCardParag}>
          {data.text}
        </p>
        <p>{data.pubDate}</p>
      
    </div>
  );
}
