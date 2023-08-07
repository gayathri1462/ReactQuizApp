

<h1 align="center">Responsive Quiz Website Using React</h1>
<h4>This readme file provides an overview of the contents and structure of my quiz website.</h4>
<div align="center">
  <h3>
    <a href="https://jp3jmn.csb.app/" target="_blank" rel=“noreferrer”>
      Demo
    </a>
    <span> | </span>
    <a href="https://codesandbox.io/s/quizapp-jp3jmn" target="_blank" rel=“noreferrer”>
      Solution
    </a>
  </h3>
</div>

<!-- OVERVIEW -->

## Overview
<img width="811" alt="image" src="https://github.com/gayathri1462/ReactQuizApp/assets/42805318/dd51020f-58ca-48e8-9c0b-b93a83043cc8">
<p>This is a simple quiz app built with React. The app allows users to participate in a quiz by answering a series of questions and provides instant results upon completion.</p>

### Built With
- Languages: HTML and Module CSS
- Libraries/Frameworks: React.js, react-icons, classnames, material-ui-tooltip, react-circular-progressbar, react-visibility-sensor
- Version Control: Git 
- Package Managers: NPM

## Features

The quiz app is designed with the following flow:

1. **Landing Page**: Upon launching the app, the user is presented with the initial landing page. The page prompts the user to click a button to enter the quiz.

2. **Instructions Page**: After the user clicks the "Enter Quiz" button, the quiz timer starts. The app transitions to the instructions page, where the user is provided with clear instructions for the quiz. After a brief delay of 3 seconds, the app automatically proceeds to the quiz component.

3. **Quiz Component**: The quiz component is where the main quiz interaction takes place. It presents a series of questions, each question accompanied by four answer options. The app retrieves the questions, options, and correct answers from an array stored in its data source.

4. **User Interaction**: As the user progresses through the quiz, they can select one answer option for each question. The app uses React state to capture and store the user's selected answers for later evaluation.

5. **Submitting the Quiz**: Once the user has answered all the questions, they can submit the quiz by clicking the "Finish" button. At this point, the app calculates the user's final score by comparing their selected answers with the correct answers stored in the data source.

6. **Results Component**: After submitting the quiz, the app transitions to the results component. This component displays the user's score, indicating how many questions they answered correctly out of the total. Additionally, the results component presents two buttons: one for reviewing the quiz to see correct answers and their responses, and another button to retake the quiz if desired.

The quiz app employs React for its user interface, using state management to handle user selections and keep track of the quiz progress. The data source contains an array of questions, options, and correct answers, facilitating the dynamic presentation of the quiz content. Overall, the app aims to provide users with an engaging quiz experience, complete with clear instructions and informative results.

## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gayathri1462/ReactQuizApp

# Install dependencies
$ npm install

# Run the app
$ npm start
```

### Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A popular routing library for React applications.

