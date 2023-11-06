import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import styles from "./App.module.css";
import NewsList from "../NewsList";
import Loading from "../Loading";


const MainPage = lazy(() => import("../../pages/MainPage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage"));
const NewsPage = lazy(() => import("../../pages/NewsPage"));

const App: React.FC = () => {
  const news = [
    {
      id: 1,
      image: "/images/image1.jpg",
      title: "The Atlantic Magazine, Covering Palestine Without Palestinians",
      content:
        "Two weeks in and 38 articles on the topic, the Atlantic has found only one token Palestinian to write about Palestine.",
      publishDate: "OCTOBER 20, 2023",
    },
    {
      id: 2,
      image: "/images/image2.jpg",
      title:
        "Our hearts are with the people in Gaza: Demonstrators in London call to end Israeli Occupation",
      content:
        "As UK government policies gradually infringe on the British lics right to freedom of speech, thousands defiantly took to the streets of London this week to show solidarity with Palestinians and demand an end to the Israeli Occupation. Nadia Péridot reports on the ground from London.",
      publishDate: "OCTOBER 19, 2023",
    },
    {
      id: 3,
      image: "/images/image3.jpg",
      title:
        "DC police arrest 500 activists at US Capitol demanding ceasefire in Gaza",
      content:
        "“We are here, very simply, to say no to genocide, to say an end to mass murder, to say an end to keeping water, food, power, and medical care away from people,” Rabbi Linda Holtzman told The Real News.",
      publishDate: "OCTOBER 19, 2023",
    },
    {
      id: 4,
      image: "/images/image4.jpg",
      title: "With concessions already won, the UAW strike escalates",
      content:
        "The Stand Up strike has already forced General Motors to fold its electric vehicle battery plants into UAWs master contract. Now, Fords largest truck plant in Kentucky is on strike.",
      publishDate: "OCTOBER 19, 2023",
    },
  ];

  const searchAutocomplete = [
    {
      text: "Hello",
      rating: 0.3,
    },
    {
      text: "Hi",
      rating: 0.6,
    },
    {
      text: "Whatts up",
      rating: 0.9,
    },
    {
      text: "Hows it going",
      rating: 0.7,
    },
    {
      text: "Yo",
      rating: 0.1,
    },
  ];


  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleTheme = (): void => {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <div className={isDarkTheme ? styles.darktheme: ''}>
       <BrowserRouter>
      <Header searchAutocomplete={searchAutocomplete} handleTheme={handleTheme} isDarktheme={isDarkTheme}/>
      <div className={styles.app}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<MainPage news={news} />} />
            <Route path="/article/:id" element={<NewsPage news={news} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
    </div>
   
  );
};

export default App;