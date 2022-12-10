import React from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
    const images = [
        "/img/featured.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg",
        ]
  return (
    <div className={styles.container}>
     <Image src="/img/arrowl.png" width={30} height={30}/>
     <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            {images.map((img,i) =>(
                <Image src="/img/featured.jpg" key={i} width="1000" height="500"/>
            ))}
        </div>
     </div>
     <Image src="/img/arrowr.png" width={30} height={30}/>
    </div>
  )
}

export default Featured
