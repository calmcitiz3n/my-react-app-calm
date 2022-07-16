import { Review } from "../Review/Review";
import GoldStar from "./img/star-gold.svg";
import styles from "./styles.module.css";
export const Rating = ({ rating, className }) => {
  switch (rating) {
    case 5:
      return (
        <div className={styles.root}>
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
        </div>
      );
    case 4:
      return (
        <div className={styles.root}>
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
        </div>
      );
    case 3:
      return (
        <div className={styles.root}>
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
        </div>
      );
    case 2:
      return (
        <div className={styles.root}>
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} alt="" />
          <img src={GoldStar} alt="" />
        </div>
      );
    case 1:
      return (
        <div className={styles.root}>
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} className={styles.grey} alt="" />
          <img src={GoldStar} alt="" />
        </div>
      );
  }
};
