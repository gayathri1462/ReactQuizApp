

<h1 align="center">Quiz App using React</h1>
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
<img width="960" alt="image" src="https://github.com/gayathri1462/ReactQuizApp/assets/42805318/fa1c0fcc-215f-4bd4-b2a5-ac23824c1e4e">

<p>This is a simple quiz app built with React. The app allows users to participate in a quiz by answering a series of questions and provides instant results upon completion.</p>

### Built With
- Languages: HTML and CSS
- Libraries/Frameworks: React.js, React Router
- CSS Preprocessor: SCSS
- Version Control: Git 
- Package Managers: NPM



## Features

The quiz app follows the following flow:

1. **Landing Page**: The initial screen prompts the user to enter their name. A form or input field is provided for the user to input their name.

2. **Start Quiz**: After the user submits their name, the quiz begins. The app transitions to the quiz component, where questions are displayed.

3. **Quiz Component**: The quiz component presents a series of questions, each with four options. The quiz questions, options, and correct answers are stored in an array or JSON format.

4. **User Interaction**: Users can select one option as their answer for each question. React state is used to capture the user's selected answer.

5. **Submitting the Quiz**: Once the user has answered all the questions, they can submit the quiz by clicking a "Submit" button. The app compares the user's selected answers with the correct answers to calculate the final score.

6. **Results Component**: After submitting the quiz, the app transitions to a results component. This component displays the user's score.


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

### License

This project is licensed under the [MIT License](LICENSE).

### Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A popular routing library for React applications.

