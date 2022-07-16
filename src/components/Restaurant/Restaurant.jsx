import React from "react";
import { Menu } from "../Menu/Menu";
//Импортируем CSS-стили как модуль
import { Reviews } from "../Reviews/Reviews";
import styles from "./styles.module.css";
export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {restaurant.menu && (
          <Menu products={restaurant.menu} className={styles.menu} />
        )}
      </div>
      <div className={styles.reviews}>
        <Reviews reviews={restaurant.reviews} className={styles.reviews} />
      </div>
    </div>
  );
};
