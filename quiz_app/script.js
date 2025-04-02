const questions = [
    {
        question : "Which is largest animal in the world?",
        options : [
            { text : "Shark", correct : false},
            { text : "Elephant", correct : false},
            { text : "Blue Whale", correct : true},
            {text : "Giraffe" , correct : false}
        ]
    },
    [   
        {
            question: "Which is the largest continent in the world?",
            options: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "Europe", correct: false },
                { text: "Australia", correct: false }
            ]
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: [
                { text: "90°C", correct: false },
                { text: "100°C", correct: true },
                { text: "110°C", correct: false },
                { text: "120°C", correct: false }
            ]
        },
        {
            question: "Which organ pumps blood throughout the human body?",
            options: [
                { text: "Liver", correct: false },
                { text: "Brain", correct: false },
                { text: "Heart", correct: true },
                { text: "Lungs", correct: false }
            ]
        },
        {
            question: "What is the national animal of India?",
            options: [
                { text: "Lion", correct: false },
                { text: "Elephant", correct: false },
                { text: "Tiger", correct: true },
                { text: "Peacock", correct: false }
            ]
        },
        {
            question: "Which planet is known for its beautiful rings?",
            options: [
                { text: "Venus", correct: false },
                { text: "Saturn", correct: true },
                { text: "Uranus", correct: false },
                { text: "Neptune", correct: false }
            ]
        },
        {
            question: "How many bones are there in the adult human body?",
            options: [
                { text: "200", correct: false },
                { text: "206", correct: true },
                { text: "210", correct: false },
                { text: "215", correct: false }
            ]
        },
        {
            question: "What is the smallest unit of life?",
            options: [
                { text: "Atom", correct: false },
                { text: "Molecule", correct: false },
                { text: "Cell", correct: true },
                { text: "Tissue", correct: false }
            ]
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: [
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Platinum", correct: false }
            ]
        },
        {
            question: "What is the main gas found in the Earth's atmosphere?",
            options: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Hydrogen", correct: false }
            ]
        }
    ]
]
const questionElement=document.querySelector("#question");
const answerButtons=document.querySelector(".options");
const nextBtn=document.querySelector(".next-btn");

let questionIndex=0;
let score=0;

function startQuiz(){
    questionIndex=0
    score=0
    nextBtn.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML=questionNo + ". "+ currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML= option.text;  
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}

function resetState(){
    nextBtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();