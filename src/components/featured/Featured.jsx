import React from 'react'
import styles from "./Featured.module.css"
import Image from"next/image";
const Featured =() => {
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>
        <b> hey,deepshikha here!</b> discover my stories and creative ideas.
        </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
             <Image src ="/p1.jpeg"alt=""fill className={styles.image}/>
            </div>
        <div className ={styles.textContainer}>
         <h1 className={styles.postTitle}>hey guyys please like and subscribe my channel</h1>
         
        <p className={styles.postDesc}
        >Explore fresh ideas and unique stories on my blog</p>
        <button className={styles.button}>Read more</button>
        </div>
        </div>
        </div>
    );
    };
export default Featured;