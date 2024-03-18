import { questionBank } from "./data.ts";

console.log(questionBank)  

const questionNumber = document.querySelector<HTMLHeadingElement>(".div__heading--num");
const resetButton = document.querySelector<HTMLButtonElement>(".div__heading--reset");
const livesCounter = document.querySelector<HTMLHeadingElement>(".div__heading--lives");
const changeQuestion = document.querySelector<HTMLHeadingElement>(".quiz__question");
const answerButtonA = document.querySelector<HTMLButtonElement>(".answers__button--a");
const answerButtonB =document.querySelector<HTMLButtonElement>(".answers__button--b");
const answerButtonC = document.querySelector<HTMLButtonElement>(".answers__button--c");
const answerButtonD = document.querySelector<HTMLButtonElement>(".answers__button--d");
const skipButton = document.querySelector<HTMLButtonElement>(".button");

if(!questionNumber || !resetButton || !livesCounter || !changeQuestion || !skipButton || !answerButtonA || !answerButtonB || !answerButtonC || !answerButtonD  ){
    throw new Error("No")
};

const handleResetButton = () => {
    window.location.reload();
}
resetButton.addEventListener("click", handleResetButton)



let currentQuestion = 0;

const changeQuestionHTML = () => {
    const query = questionBank[currentQuestion]; 
    questionNumber.innerHTML = query.questionNum.toString();
    changeQuestion.innerHTML = query.question;
    // add the images for questions that have images. 
    answerButtonA.innerHTML = query.possibleAns[0]
    answerButtonB.innerHTML = query.possibleAns[1];
    answerButtonC.innerHTML = query.possibleAns[2];
    answerButtonD.innerHTML = query.possibleAns[3]; 
};

changeQuestionHTML();


 let livesCounterIndex = 3;


const handleIncorrectAns = () => {
    livesCounterIndex--;
    const constPart = "Lives:";
    const text = `${constPart} ${'♥'.repeat(livesCounterIndex)}`; 
    livesCounter.textContent = text; 
    if (livesCounterIndex === 0) {
        questionNumber.style.display = "none";
        document.body.style.backgroundColor = "#d90808";
    }
};

const validateCorrectAns= (answerClicked: string) => {
    const correctAnswer = questionBank[currentQuestion].correctAns;
    if(answerClicked === correctAnswer){
        currentQuestion++;
        changeQuestionHTML()
    } else {
        handleIncorrectAns();
    }
};


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




//add audio "ding" when user gets correct answer.
//add confetti at the very end
// skip button that doesnt do anything and goes around the page whenever it is pressed.