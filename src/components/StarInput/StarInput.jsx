import { useReducer } from "react";
import goldStar from "./img/star-gold.svg";
import styles from "./styles.module.css";
import blackStar from "./img/star.svg";
import classnames from "classnames";

export const StarInput = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      <span>Rating:</span>
      {[...Array(5)].map((_, index) => {
        //Создаём элемент img с индексом i, при клике на который он будет закрашиваться
        return (
          <img
            key={index}
            src={index >= value ? blackStar : goldStar}
            className={classnames(styles.star)}
            onClick={() => onChange(index + 1)}
          />
        );
      })}
    </div>
  );
};
