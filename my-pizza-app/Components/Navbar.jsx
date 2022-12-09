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
      <div className={styles.item}>center</div>
      <div className={styles.item}>Right</div>
    </div>
  )
}

export default Navbar
