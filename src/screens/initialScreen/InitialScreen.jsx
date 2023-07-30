import { useState, useEffect, useMemo } from "react";
import styles from "./InitialScreen.module.css";
import appStyles from "../../App.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { instructionsData } from "../../utils/instructionsData";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import cx from "classnames";

export const InitialScreen = ({ setStartQuiz, isRetakeQuiz }) => {
  const textToDisplay = useMemo(
    () => [
      <div key="1">
        <p className={styles.numberStyling}>1</p>
        <p className={styles.textStyling}>Ready</p>
      </div>,
      <div key="2">
        <p className={styles.numberStyling}>2</p>
        <p className={styles.textStyling}>Set</p>
      </div>,
      <div key="3">
        <p className={styles.numberStyling}>3</p>
        <p className={styles.textStyling}>Quiz</p>
      </div>
    ],
    []
  );

  const [click, setClicked] = useState(false);
  const [displayText, setDisplayText] = useState(textToDisplay[0]);
  const [count, setCount] = useState(1);
  const [restartTimer, setRestartTimer] = useState(false);

  useEffect(() => {
    if (click || restartTimer) {
      const interval = setInterval(() => {
        // Change the text every second for 3 seconds
        setDisplayText(textToDisplay[count]);
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      setTimeout(() => {
        // After 3 seconds, set the final text
        clearInterval(interval);
        setStartQuiz(true);
        setCount(1);
        setRestartTimer(false);
      }, 3000);

      // Cleanup the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [count, textToDisplay, setStartQuiz, click, restartTimer]);

  useEffect(() => {
    if (isRetakeQuiz) {
      setClicked(true);
      setDisplayText(textToDisplay[0]);
      setCount(1);
      setRestartTimer(true);
    }
  }, [isRetakeQuiz, textToDisplay]);

  return (
    <>
      <div
        className={`${styles.initialScreenWrapper} ${
          click ? cx(appStyles.fadeInRight, styles.countDownWrapper) : ""
        }`}
      >
        {!click ? (
          <>
            <div className={cx(appStyles.fadeInBottom, styles.leftDiv)}>
              <p>Java</p>
            </div>
            <div className={cx(appStyles.fadeInTop, styles.rightDiv)}>
              <p>Script</p>
            </div>
            <div className={styles.btnDiv}>
              <InfoToolTip
                text="Click me to start the Quiz!"
                component={
                  <button
                    onClick={() => setClicked(true)}
                    className={appStyles.fadeInLeft}
                  >
                    <span>Enter the Quiz Arena! </span>
                    <AiOutlineArrowRight />
                  </button>
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className={cx(styles.counter, appStyles.pulse)}>
              {displayText}
            </div>
            <div className={cx(styles.instructionsDiv, appStyles.fadeInRight)}>
              <h3>{instructionsData?.title}:</h3>
              <ol>
                {instructionsData?.data?.map((instruction, index) => {
                  return <li key={index}>{instruction}</li>;
                })}
              </ol>
            </div>
          </>
        )}
      </div>
    </>
  );
};
