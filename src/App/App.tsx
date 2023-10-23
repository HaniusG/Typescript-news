import React from 'react'
import Header from '../Header'
import NewsCard from '../NewsCard';
import styles from './App.module.css'

const App: React.FC = () => {

  interface News  {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
    pubDate: string;
  }


  const news: News[] = [
    {
      id: 1,
      imageUrl: "/images/image1.jpg",
      title: "The Atlantic Magazine, Covering Palestine Without Palestinians",
      text: "Two weeks in and 38 articles on the topic, the Atlantic has found only one token Palestinian to write about Palestine.",
      pubDate: "OCTOBER 20, 2023",
    },
    {
      id: 2,
      imageUrl: "/images/image2.jpg",
      title: "Our hearts are with the people in Gaza: Demonstrators in London call to end Israeli Occupation",
      text: "As UK government policies gradually infringe on the British publics right to freedom of speech, thousands defiantly took to the streets of London this week to show solidarity with Palestinians and demand an end to the Israeli Occupation. Nadia Péridot reports on the ground from London.",
      pubDate: "OCTOBER 19, 2023",
    },
    {
      id: 3,
      imageUrl: "/images/image3.jpg",
      title: "DC police arrest 500 activists at US Capitol demanding ceasefire in Gaza",
      text: "“We are here, very simply, to say no to genocide, to say an end to mass murder, to say an end to keeping water, food, power, and medical care away from people,” Rabbi Linda Holtzman told The Real News.",
      pubDate: "OCTOBER 19, 2023",
    },
    {
      id: 4,
      imageUrl: "/images/image4.jpg",
      title: "With concessions already won, the UAW strike escalates",
      text: "The Stand Up strike has already forced General Motors to fold its electric vehicle battery plants into UAWs master contract. Now, Fords largest truck plant in Kentucky is on strike.",
      pubDate: "OCTOBER 19, 2023",
    },
  ];

  return (
    <div>
        <Header/>
        <div className={styles.newsCardDiv}>
           {
           news.map((n: News)=>{
            return(
             
                <NewsCard data={n}/>
            )
          })}
        </div>
    </div>
    
  )
}

export default App;