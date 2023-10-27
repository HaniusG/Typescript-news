import React from "react";
import styles from "./Header.module.css";
import UserIcon from "../UserIcon";

const Header: React.FC = () => {
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

      <UserIcon />
    </header>
  );
};

export default Header;
