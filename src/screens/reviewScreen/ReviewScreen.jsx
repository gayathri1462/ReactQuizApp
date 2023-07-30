import styles from "./ReviewScreen.module.css";
import appStyles from "../../App.module.css";
import { quizData } from "../../utils/quizData";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import { Question } from "../../components/question/Question";
import cx from "classnames";

export const ReviewScreen = ({ setIsRetake }) => {
  const { questions } = quizData;

  return (
    <div className={cx(appStyles.fadeInRight, styles.reviewScreenWrapper)}>
      <div className={styles.reviewScreen}>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            {questions.slice(0, 2).map((data, index) => (
              <Question index={index} data={data} />
            ))}
          </div>
          <div className={styles.column}>
            {questions.slice(2, 4).map((data, index) => {
              return <Question index={index + 2} data={data} />;
            })}
          </div>
        </div>

        <div className={styles.btnDiv}>
          <InfoToolTip
            text="Click me to retake the quiz!"
            component={
              <button
                onClick={() => {
                  setIsRetake(true);
                }}
                className={styles.retakeBtn}
              >
                Retake Quiz
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};
