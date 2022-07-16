import styles from "./styles.module.css";
import classnames from "classnames";
import { Product } from "../Product/Product.jsx";

export const Menu = ({ products, className, isTouch }) => {
  if (!products?.length) {
    return <span>Нет меню!!</span>;
  }

  return (
    //Если мобильная версия, то isTouch
    <div
      className={classnames(styles.root, className, {
        [styles.rootTouch]: isTouch,
      })}
    >
      {products.map((product) => (
        <Product name={product.name} className={styles.product} />
      ))}
    </div>
  );
};
