import classnames from "classnames";
import { useState } from "react";
import styles from "./styles.module.css";
export const Product = ({ name, className }) => {
  //хук - это специальная функция, которая позволяет «прицепиться» к возможностям React. Например, useState - это хук, который позволяет добавлять состояние React к компонентам-функциям

  const [count, setCount] = useState(() => 0); //1-й элемент массива - текущее состояние - второй - функция для изменения этого состояния. В useState() в скобках пишем значение. [] - это диструктурирующее присваивание
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.restaurant}>{name}</span>
      <div className={styles.actions}>
        <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount((currentState) => currentState + 1)}>
          +
        </button>
      </div>
    </div>
  );
};
//1 button просто выполняем функцию, а 2-й передаёт в  функцию другую функцию с новым аргументом в скобках

//Внутри компонентов мы пишем внутренние функции (padding, align-items и т.д, а при экспорте функций на страницу задаются внешние стили)
