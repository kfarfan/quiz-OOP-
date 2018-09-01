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
    const restartButtonEl = document.querySelector('.restart')

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


    const listeners = _ => {
        nextButtonEl.addEventListener('click', function() {
            const selectedRadioElem = document.querySelector('input[name="choice"]:checked');
            if (selectedRadioElem) {
                const key = Number(selectedRadioElem.getAttribute('data-order'));
                quiz.guess(key);
                renderAll();
            }
        })

        restartButtonEl.addEventListener('click', function() {
            quiz.reset();
            renderAll();
            nextButtonEl.style.opacity = 1;
            renderTracker();
        })
    }





    const setValue = (elem, value) => {
         elem.innerHTML = value;
    }



    const renderQuestion = _ => {
        const question = quiz.getCurrentQuestion().question;
        setValue(quizQuestionEl, question);
    }

    const renderChoicesElements = _ => {
        let markup = "";
        const currentChoices = quiz.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            markup += `
            <li class="jabquiz__choice">
             <input type="radio" name="choice" class="jabquiz__input" data-order=${index} id="choice${index}">
             <label for="choice${index}" class="jabquiz__label">
                <i></i>
                <span>${elem}</span>
             </label>
            </li>
            `
        });
            setValue(choicesEl, markup);
    }


    const renderTracker = _ => {
        const index = quiz.currentIndex;
        setValue(trackerEl, `${index+1} out of ${quiz.questions.length}`)


    }

    const getPercentage = (num1, num2) => {
        return Math.round((num1/num2) * 100);
    }

    const launch = (width, maxPercent) => {
        let loadingBar = setInterval( function() {
            if (width > maxPercent) {
                clearInterval(loadingBar);
            } else {
                width++;
                progressInnerEl.style.width = width + "%";
            }
        }, 3)
    }
    

    const renderProgress = _ => {
        // 1. width
        const currentWidth = getPercentage(quiz.currentIndex,quiz.questions.length);
        // 2. launch
        launch(0, currentWidth);

    }


    const renderEndScreen = _ => {
        setValue(quizQuestionEl, `Great Job!`);
        setValue(taglineEl, `Complete!`);
        setValue(trackerEl, `Your score: ${getPercentage(quiz.score,quiz.questions.length)}%`);
        nextButtonEl.style.opacity = 0;
        renderProgress();
    }


    const renderAll = _ => {
        if (quiz.hasEnded()){
            //render the end screen
            renderEndScreen();
        } else {
            //render the question
            renderQuestion();
            //render the choices elements
            renderChoicesElements();
            //render the tracker
            renderTracker();
            //render the progress bar
            renderProgress();
        }
    }


    return {
        renderAll: renderAll,
        listeners: listeners
    }

})();


App.renderAll();
App.listeners();