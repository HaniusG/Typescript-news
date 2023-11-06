import React from "react";
import styles from "./NewsLIst.module.css";
import NewsCard from "../NewsCard";
import NewsListProprs from "./NewsList.interface";
import { NewsCardProps } from "../NewsCard/NewsCard.interface";

const NewsList: React.FC<NewsListProprs> = ({ news }) => {
  return (
    <div className={styles.newsCardDiv}>
      {news.map((item: NewsCardProps) => {
        return <NewsCard {...item} />;
      })}
    </div>
  );
};

export default NewsList;
