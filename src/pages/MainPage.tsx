import React from 'react'
import { Link } from 'react-router-dom';
import NewsList from '../components/NewsList';
import NewsListProprs from '../components/NewsList/NewsList.interface';


const MainPage: React.FC<NewsListProprs> = ({news}) => {
  return (
    <div>
        <NewsList news={news}/>
    </div>
  )
}

export default MainPage;
