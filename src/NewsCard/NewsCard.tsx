import React from "react";
import styles from "./NewsCard.module.css";

interface NewsCardProps  {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
  pubDate: string;
}

type PrivateProps = {
  data: NewsCardProps
}

const NewsCard: React.FC<PrivateProps> = ({data}) =>{
  
  
  return (
    <div className={styles.newsCard}>

    <h1>{data.title}</h1>

      <div className={styles.newsImgDiv}>
        <img alt="No img" src={data.imageUrl} className={styles.image2}></img>
      </div>
      
        <p className={styles.newsCardParag}>
          {data.text}
        </p>
        <p>{data.pubDate}</p>
      
    </div>
  );
}

export default NewsCard