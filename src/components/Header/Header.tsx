import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import UserIcon from "../UserIcon";
import Search from "../Search";
import { HeaderProps } from "./Header.interface";
import { SearchProps } from "../Search/Search.interface";



const Header: React.FC<HeaderProps> = ({ searchAutocomplete, handleTheme, isDarktheme }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerH}>
        <h2>Carousel</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.li2}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.li3}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Search searchAutocomplete={searchAutocomplete} />
      <button onClick={handleTheme}>{isDarktheme ? "Dark" : "Light"}</button>
      <UserIcon />
      
    </header>
  );
};

export default Header;
