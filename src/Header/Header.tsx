import React from "react";
import styles from "./Header.module.css";
import UserIcon from "../UserIcon";
import Search from "../Search";
import { SearchProps } from "../Search/Search.interface";

const Header: React.FC<SearchProps> = ({searchAutocomplete}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerH}>
        <h2>Carousel</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className={styles.li2}>
            <a href="#">Link</a>
          </li>
          <li className={styles.li3}>
            <a href="#">Disabled</a>
          </li>
        </ul>
      </nav>
      <Search searchAutocomplete={searchAutocomplete}/>
      <UserIcon />
    </header>
  );
};

export default Header;
