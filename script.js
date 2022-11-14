const quizDB = [
  {
    question:
      "Q1: Which of these elements in HTML can be used for making a text bold?",
    a: "<a>",
    b: "<pre>",
    c: "<br>",
    d: "<b>",
    ans: "ans4",
  },
  {
    question: "Q2: Which tag do we use in HTML for inserting a line-break?",
    a: "<a>",
    b: "<br>",
    c: "<b>",
    d: "<pre>",
    ans: "ans2",
  },
  {
    question: "Q3: What is CSS?",
    a: "CSS is a style sheet language",
    b: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
    c: "CSS is the language used to style the HTML documents",
    d: "All of the mentioned",
    ans: "ans4",
  },
  {
    question:
      "Q4: Which of the following tag is used to embed css in html page?",
    a: "<css>",
    b: "<!DOCTYPE html>",
    c: "<script>",
    d: "<style>",
    ans: "ans4",
  },

  {
    question: "Q5: Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");
const ans = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let count = 0;
let score = 0;
const loadQuestion = () => {
  let queList = quizDB[count];
  question.innerText = queList.question;

  option1.innerText = queList.a;
  option2.innerText = queList.b;
  option3.innerText = queList.c;
  option4.innerText = queList.d;
};

loadQuestion();

const getCheckAnswers = () => {
  let answer;
  ans.forEach((data) => {
    if (data.checked) {
      answer = data.id;
    }
  });
  return answer;
};

const deselectAll = () => {
   ans.forEach((data) =>data.checked = false);
};

submit.addEventListener("click", () => {

  let checkAns = getCheckAnswers();

  if (checkAns === quizDB[count].ans) {
    score++;
  }

deselectAll();

  count++;
  if (count < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> Your score is ${score} / ${quizDB.length} </h3>
        <button class ="btn" onclick="location.reload();">Start Again</button>
        `;

    showScore.classList.remove("scoreArea");
  }
});
