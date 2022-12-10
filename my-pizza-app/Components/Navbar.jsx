import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButtton}>
        <Image width={30} height={30} src="/img/telephone.png"/>
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW</div>
        <div className={styles.text}>+91-9454023332</div>
      </div>
      </div>
      <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>HomePage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <Image src="/img/logo.png" alt="logo" width={100} height={40}
            />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
      </div>
      <div className={styles.item}>Right</div>
    </div>
  )
}

export default Navbar
