# Quiz

### Languages(s) Used

1. Typescript: 5.2.2

### Dev Dependencies

1. SASS: 1.71.1
2. Vite: 5.1.4
3. typescript: 5.2.2

### Standard Dependencies

1. Confetti: ^1.9.2

## Table of Contnets

- [Introduction](#introduction)
- [Game Preview](#game-preview)
- [Code Snippet](#code-snippet)
- [Setup](#setup)

## Introduction

A slightly frustrating game testing your knowledge and ability to think outside the box. Inspired by and an homage to the "Impossible Quiz", a popular online game back in the 2010s. One question and four possible answers to choose from. Can you make it to the end?

## Game Preview

![An image of the game](/assets/images/game-screenshot.png "image of game")

## Features

- 4 Buttons containing the possible answers.
- Some questions may contain an image to help you answer the question
- A skip button, for when it gets too hard. 

## Code Snippet

```let livesCounterIndex = 3;
const handleIncorrectAns = () => {
  livesCounterIndex--;
  const constPart = "Lives:";
  const text = `${constPart} ${"♥".repeat(livesCounterIndex)}`;
  livesCounter.textContent = text;
  if (livesCounterIndex === 0) {
    questionNumber.style.display = "none";
    skipButton.style.display = "none";
    document.body.style.backgroundColor = "#ff4832"
    answerButtonA.style.display = "none";
    answerButtonB.style.display = "none";
    answerButtonC.style.display = "none";
    answerButtonD.style.display = "none";
    changeQuestion.innerHTML = "Retry?";
  }
};

```

Implementation of losing lives when the user gets a question wrong. The initial count being 3 lives and losing a heart icon everytime, by using the ".repeat()" method. Once the lives count reaches zero, the style of the page changes and encourages the user to retry and to press the "reset" button as all other available buttons have disappeaered.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the "src" folder to find the Typescript, if changes are desired.
3. Open a new terminal and type "npm run dev"
