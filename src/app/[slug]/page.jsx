import Menu from '@/components/Menu/Menu';
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from '@/components/Comments/Comments';


const SinglePage = () => {     
         
  return (
    <div className={styles.container}>
  <div className={styles.infoContainer}>
    <div className={styles.textContainer}>
      <h1>Vlog alert! 🚨 I'm sharing my latest adventures with you all. Don't forget to like and subscribe! 👍</h1>
    </div>
    <div className={styles.user}>
      <div className={styles.userImageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
      </div>
      <div className={styles.userTextContainer}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}>01.01.2025</span>
      </div>
    </div>
  </div>

  <div className={styles.imageContainer}>
    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
  </div>

  <div className={styles.content}>
    <div className={styles.post}>
      <div className={styles.description}>
        <p>Get ready for a behind-the-scenes look at my life! 🎥 New vlog coming soon! 📺</p>
        <p>Just dropped a new vlog! 🤩 Check it out and let me know what you think! 😊</p>
      </div>
      <div className={styles.comment}>
        <Comments/>
      </div>
      <Menu />
    </div>
  </div>
</div>
  );
};
export default SinglePage;