import styles from "./styles.module.css";
import classnames from "classnames";
import { Review } from "../Review/Review.jsx";
import { NewReviewForm } from "../newReviewForm/newReviewForm";
export const Reviews = ({ reviews, className, isTouch }) => {
  // Параметр для задания внешнего стиля
  if (reviews?.length == 0) {
    return <div>No reviews</div>;
  }
  return (
    //Если мобильная версия, то isTouch
    <div className={classnames(styles.root, className)}>
      <div>
        {reviews.map((review) => (
          <Review
            user={review.user}
            rating={review.rating}
            text={review.text}
            className={styles.review}
          />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};
