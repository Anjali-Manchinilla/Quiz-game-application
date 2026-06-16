const quizData = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: ["HTML","CSS","Python","Java"],
    answer: "CSS"
},
{
    question: "Which language is used for web interactivity?",
    options: ["C","Java","JavaScript","Python"],
    answer: "JavaScript"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion(){

    const q = quizData[currentQuestion];

    questionEl.innerHTML =
        `<h2>${q.question}</h2>`;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        const btn =
        document.createElement("button");

        btn.innerText = option;
        btn.classList.add("option");

        btn.onclick = () => selectAnswer(option);

        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected){

    const correct =
    quizData[currentQuestion].answer;

    if(selected === correct){
        score++;
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        showResult();
    }
});

function showResult(){

    questionEl.innerHTML = "";
    optionsEl.innerHTML = "";

    resultEl.innerHTML =
    `<h2>Your Score: ${score}/${quizData.length}</h2>`;

    nextBtn.style.display = "none";
}

loadQuestion();