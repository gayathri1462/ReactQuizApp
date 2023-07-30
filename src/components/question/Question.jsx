import styles from "./Question.module.css";
import { TiTickOutline } from "react-icons/ti";

const MyComponent = () => {
  return (
    <div>
      <h1>Example Icon Styling</h1>
      <TiTickOutline style={{ fontSize: "24px", color: "green" }} />
    </div>
  );
};

export const Question = ({ index, data }) => {
  return (
    <div key={index} className={styles.questionDiv}>
      <p className={styles.question}>
        {index + 1}. {data.question}
      </p>
      <ul className={styles.options}>
        {data.choices.map((option, idx) => (
          <li
            key={idx}
            className={
              option !== data.correctAnswer
                ? styles.option
                : styles.correctOption
            }
          >
            {option} &nbsp;
            {option === data.correctAnswer ? (
              <TiTickOutline
                style={{
                  fontSize: "20px",
                  color: "green"
                }}
              />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
