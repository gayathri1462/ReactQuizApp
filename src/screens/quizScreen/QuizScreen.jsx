import { useState } from "react";
import styles from "./QuizScreen.module.css";
import appStyles from "../../App.module.css";
import { quizData } from "../../utils/quizData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import cx from "classnames";

export const QuizScreen = ({ setIsRetake, setIsReview }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  });

  const { questions } = quizData;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const calculatePercentage = (score) => {
    return (score.correctAnswers / questions?.length) * 100;
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div
      className={
        showResult
          ? cx(appStyles.fadeInRight, styles.resultWrapper)
          : cx(appStyles.fadeInLeft, styles.quizScreenWrapper)
      }
    >
      {!showResult ? (
        <div className={styles.quizCard}>
          <div className={styles.quizCardHeader}>
            <span className={styles.activeQuestionNo}>
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className={styles.totalQuestion}>
              &nbsp;/&nbsp;{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <div className={styles.optionsDiv}>
            {choices.map((option, index) => (
              <div
                onClick={() => onAnswerSelected(option, index)}
                key={option}
                className={
                  selectedAnswerIndex === index
                    ? styles.selectedAnswer
                    : styles.option
                }
              >
                {option}
              </div>
            ))}
          </div>
          <div className={styles.btnDiv}>
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
              className={
                selectedAnswerIndex === null
                  ? styles.disabledDiv
                  : styles.nextBtnDiv
              }
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className={cx(appStyles.fadeInBottom, styles.resultScreen)}>
          <div className={styles.headerText}>
            <h3>Result</h3>
          </div>
          <div className={styles.result}>
            <div>
              <p className={styles.textStyling}>
                Total Question:{" "}
                <span className={styles.numberStyling}>{questions.length}</span>
              </p>
              <p className={styles.textStyling}>
                Total Score:
                <span className={styles.numberStyling}> {result.score}</span>
              </p>
              <p className={styles.textStyling}>
                Correct Answers:
                <span className={styles.numberStyling}>
                  {result.correctAnswers}
                </span>
              </p>
              <p className={styles.textStyling}>
                Wrong Answers:
                <span className={styles.numberStyling}>
                  {" "}
                  {result.wrongAnswers}
                </span>
              </p>
            </div>
            <div className={styles.resultChart}>
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible
                    ? calculatePercentage(result)
                    : 0;
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      backgroundPadding={6}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#ffd700",
                        trailColor: "#f6f6f6"
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
            </div>
          </div>
          <div className={styles.btnDiv}>
            <InfoToolTip
              text="Click me to see the correct answers!"
              component={
                <button
                  onClick={() => {
                    setActiveQuestion(0);
                    setShowResult(false);
                    setIsReview(true);
                  }}
                  className={styles.reviewBtn}
                >
                  Review Quiz
                </button>
              }
            />

            <InfoToolTip
              text="Click me to retake the quiz!"
              component={
                <button
                  onClick={() => {
                    setActiveQuestion(0);
                    setShowResult(false);
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
      )}
    </div>
  );
};
