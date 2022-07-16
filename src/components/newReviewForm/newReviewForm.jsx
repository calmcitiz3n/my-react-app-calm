import styles from "./style.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { StarInput } from "../StarInput/StarInput";
// import { type } from "@testing-library/user-event/dist/type";
const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state, action) => {
  //Записываем здесь как наше состояние будет меняться от того или иного действия
  switch (action?.type) {
    case FORM_ACTIONS.setName:
      return { ...state, name: action.payload.name, text: "" };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload.text };
    case FORM_ACTIONS.setRating:
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
}; // Логика изменения состояния, описанная с помощью экшенов
export const NewReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, {
    name: "Artem",
    text: "text",
    rating: 0,
  }); // Работает как useState(), тоже сохраняет состояние и выполняет перерендеры, но useReducer()
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.formElement}>
        <span>Name</span>
        <input
          type="text"
          value={form.name}
          onClick={(event) =>
            dispatch({
              type: FORM_ACTIONS.setName,
              payload: { name: event.target.value },
            })
          }
        />
      </div>
      <div className={styles.formElement}>
        <span>Text</span>
        <input
          type="text"
          value={form.text}
          onClick={(event) =>
            dispatch({
              type: FORM_ACTIONS.setText,
              payload: { text: event.target.value },
            })
          }
        />
      </div>
      <StarInput
        value={form.rating}
        onChange={(value) => {
          dispatch({
            type: FORM_ACTIONS.setRating,
            payload: { rating: value },
          });
        }}
      />
    </div>
  );
};
