import { questionBank } from "./data.ts";

const questionNumber = document.querySelector<HTMLHeadingElement>(".div__heading--num");
const resetButton = document.querySelector<HTMLButtonElement>(".div__heading--reset");
const livesCounter = document.querySelector<HTMLHeadingElement>(".div__heading--lives");
const changeQuestion = document.querySelector<HTMLHeadingElement>(".quiz__question");
const answerButtonA = document.querySelector<HTMLButtonElement>(".answers__button--a");
const answerButtonB =document.querySelector<HTMLButtonElement>(".answers__button--b");
const answerButtonC = document.querySelector<HTMLButtonElement>("answers__button--c");
const answerButtonD = document.querySelector<HTMLButtonElement>("answers__button--d");

if(!questionNumber || !resetButton || !livesCounter || !changeQuestion || !answerButtonA || !answerButtonB || ! answerButtonC || ! answerButtonD){
    throw new Error("No")
};

// resetting everything, without having to refresh page.
const handleResetButton = () => {
    window.location.reload();
}
resetButton.addEventListener("click", handleResetButton)

//change question number



//change questions 
let currentQuestion = 0;

const changeQuestionHTML = () => {
    const pregunta = questionBank[currentQuestion]; 
    changeQuestion.innerHTML = pregunta.question;
    answerButtonA.innerHTML = pregunta.possibleAns[0]
    answerButtonB.innerHTML = pregunta.possibleAns[1];
    answerButtonC.innerHTML = pregunta.possibleAns[2];
    answerButtonD.innerHTML = pregunta.possibleAns[3]; 
    };

    changeQuestionHTML();
console.log(answerButtonA)
//validate correct answer
// const validateCorrectAns = () => {
    
// }



//lose life is incorrect answer.