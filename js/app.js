import Question from "./question.js";
import Quiz from "./quiz.js";

let q1 = new Question('who is kevin?',['a,b,c,d'],0);

let q2 = new Question('who is blah?',['a,b,c,d'],0);

let myQuiz = new Quiz([q1,q2]);

console.log(myQuiz.score)
console.log(myQuiz.getCurrentQuestion());

myQuiz.guess(0);
console.log(myQuiz.score);