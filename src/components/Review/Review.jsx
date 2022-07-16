import classnames from "classnames";
import styles from "./styles.module.css";
import Star from "./img/star-gold.svg";
import { Rating } from "../Rating/Rating";
export const Review = ({ user, rating, text, className }) => {
  //Возвращаем компонент отзыва в Reviews
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.info}>
        <div className={styles.user}>{user}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.rate}>
        <Rating rating={rating} className={styles.rating} />
      </div>
    </div>
  );
};
