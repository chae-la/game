export type Question = {
    questionNum: number,
    question: string;
    image ?: string;
    possibleAns: string[];
    correctAns: string;
}