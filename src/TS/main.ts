import { questionBank } from "./data.ts";
import confetti from "canvas-confetti";


const questionNumber =
  document.querySelector<HTMLHeadingElement>(".div__heading--num");
const resetButton = document.querySelector<HTMLButtonElement>(
  ".div__heading--reset"
);
const livesCounter = document.querySelector<HTMLHeadingElement>(
  ".div__heading--lives"
);
const changeQuestion =
  document.querySelector<HTMLHeadingElement>(".quiz__question");
const answerButtonA = document.querySelector<HTMLButtonElement>(
  ".answers__button--a"
);
const answerButtonB = document.querySelector<HTMLButtonElement>(
  ".answers__button--b"
);
const answerButtonC = document.querySelector<HTMLButtonElement>(
  ".answers__button--c"
);
const answerButtonD = document.querySelector<HTMLButtonElement>(
  ".answers__button--d"
);
const skipButton = document.querySelector<HTMLButtonElement>(".button");
const audio = document.querySelector<HTMLAudioElement>(".audio");
const congrats = document.querySelector<HTMLHeadingElement>(".congrats");
const imgElement = document.querySelector<HTMLImageElement>(".quiz__img");

if (
  !questionNumber ||
  !resetButton ||
  !livesCounter ||
  !changeQuestion ||
  !skipButton ||
  !answerButtonA ||
  !answerButtonB ||
  !answerButtonC ||
  !answerButtonD ||
  !audio ||
  !congrats ||
  !imgElement
) {
  throw new Error("No, STOP THAT!!");
}

const handleResetButton = () => {
  window.location.reload();
};

let currentQuestion = 0;

const changeQuestionHTML = () => {
  const query = questionBank[currentQuestion];
  questionNumber.innerHTML = query.questionNum.toString();
  changeQuestion.innerHTML = query.question;
  if (query.imageSRC) {
    imgElement.src = query.imageSRC;
    imgElement.style.display = "block";
  }
  answerButtonA.innerHTML = query.possibleAns[0];
  answerButtonB.innerHTML = query.possibleAns[1];
  answerButtonC.innerHTML = query.possibleAns[2];
  answerButtonD.innerHTML = query.possibleAns[3];
};
changeQuestionHTML();


let livesCounterIndex = 3;
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

const validateCorrectAns = (answerClicked: string) => {
  const correctAnswer = questionBank[currentQuestion].correctAns;
  if (answerClicked === correctAnswer) {
    if (currentQuestion === questionBank.length - 1) {
      document.body.style.backgroundColor = "d8f8e9";
      answerButtonA.style.display = "none";
      answerButtonB.style.display = "none";
      answerButtonC.style.display = "none";
      answerButtonD.style.display = "none";
      changeQuestion.style.display = "none";
      skipButton.style.display = "none";
      congrats.style.display = "unset";
      congrats.style.fontSize = "4rem";
      confetti(options);
    }
    currentQuestion++;
    audio.currentTime = 0;
    audio.play();
    imgElement.style.display = "none";
    changeQuestionHTML();
  } else {
    handleIncorrectAns();
  }
};

const options = {
  particleCount: 1000,
  spread: 180,
  ticks: 300,
};

const randomPosition = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const randomX = Math.random() * (windowWidth - 75);
  const randomY = Math.random() * (windowHeight - 45);
  return { x: randomX, y: randomY };
};
const setRandomPosition = () => {
  const { x, y } = randomPosition();
  skipButton.style.left = `${x}px`;
  skipButton.style.top = `${y}px`;
};

resetButton.addEventListener("click", handleResetButton);
answerButtonA.addEventListener("click", () => {
  const selectedAns = answerButtonA?.textContent ?? "";
  validateCorrectAns(selectedAns.toString());
});
answerButtonB.addEventListener("click", () => {
  const selectedAns = answerButtonB?.textContent ?? "";
  validateCorrectAns(selectedAns.toString());
});
answerButtonC.addEventListener("click", () => {
  const selectedAns = answerButtonC?.textContent ?? "";
  validateCorrectAns(selectedAns.toString());
});
answerButtonD.addEventListener("click", () => {
  const selectedAns = answerButtonD?.textContent ?? "";
  validateCorrectAns(selectedAns.toString());
});
skipButton.addEventListener("click", setRandomPosition);
