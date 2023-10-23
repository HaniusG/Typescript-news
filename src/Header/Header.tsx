import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.headerDiv}>
        <h2>
            Carousel
        </h2>
      <ul>
        <li><h3>Home</h3></li>
        <li className={styles.li2}><h3>Link</h3></li>
        <li className={styles.li3}><h3>Disabled</h3></li>
      </ul>
    </div>
  )
}
