import Question from "./question.js";
import Quiz from "./quiz.js";



const App = ( () => {

    // cache the DOM
    const quizEl = document.querySelector('.jabquiz');
    const quizQuestionEl = document.querySelector('.jabquiz__question');
    const trackerEl = document.querySelector('.jabquiz__tracker');
    const taglineEl = document.querySelector('.jabquiz__tagline');
    const choicesEl = document.querySelector('.jabquiz__choices');
    const progressInnerEl = document.querySelector('.progress__inner');
    const nextButtonEl = document.querySelector('.next');
    const restart = document.querySelector('.restart')

    const q1 = new Question(
        "What does CSS stand for?",
        ["Counter-Strike Source", "Cascading Style Sheets", "County Sewage Service", "Campbells Shrimp Salad"], 1
    )

    
    const q2 = new Question(
        "When was JavaScript created?",
        ["July 1985", "May 1995", "August 2016", "September 2001"], 1
    )

    
    const q3 = new Question(
        "What will console.log(typeof []) show in the console?",
        ["Object", "Array", "Arr", "Error"], 0
    )

    
    const q4 = new Question(
        "What does is . vs # in css?",
        ["period versus hashtag", "color vs footer", "class vs id", "none of the above"], 2
    )


    const quiz = new Quiz([q1, q2, q3, q4]);



    console.log(quiz);





})();