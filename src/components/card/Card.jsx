import Image from "next/image";
import styles from "./card.module.css"; // Ensure correct relative path
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg"alt="" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>

        <Link href="/" >
          <h1 className={styles.title}>Please share my recent post</h1>
        </Link>

        <p className={styles.desc}>
          I've just launched my latest blog platform where I share fresh ideas, tips, and stories. Whether you're here for inspiration, learning, or just some good reads — you'll find it all in one place!
        </p>

        <Link href="/" className={styles.link}>Read More</Link>

        
        
      </div>
    </div>
  );
};

export default Card;
