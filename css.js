
const quizData = [
    {
      question: "CSS stands for?",
      a: "Classic style sheet",
      b: "Cascading style sheet",
      c: "Cascading system style",
      d: "none of these",
      correct: "b",
    },
    {
      question: "What is the correct HTML for referring to an external style sheet?",
      a: "<style src = ('mystyle.css') ",
      b: "<style> Mystyle.css",
      c: "<style> Mystyle.css </style>",
      d: "<style src = 'mystyle.css'",
      correct: "d",
    },
    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      a: "At the end of the body ",
      b: "In body section",
      c: "In the head section",
      d: "Externally",
      correct: "c",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      a: "<style>",
      b: "<css>",
      c: "<script>",
      d: "none of these",
      correct: "a",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      a: "styles",
      b: "css",
      c: "style",
      d: "styling",
      correct: "c",
    },
  ];
  
  const answerEls = document.querySelectorAll(".answer");
  const aText = document.getElementById("aText");
  const bText = document.getElementById("bText");
  const cText = document.getElementById("cText");
  const dText = document.getElementById("dText");
  const questionEl = document.getElementById("question");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  quizLoad();
  
  function quizLoad() {
    deSelectInput();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
  }
  
  function getSelection() {
    let answer = undefined;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deSelectInput() {
    answerEls.forEach((answer) => {
      answer.checked = false;
    });
  }
  
var alertsc = document.getElementById('alertsc')
var htmlcard = document.getElementById('htmlcard')

  submitBtn.addEventListener("click", () => {
    const answer = getSelection();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        quizLoad();
      } else {
        alertsc.style.display = "block"
        htmlcard.style.display = "none"

        alertsc.innerHTML=(`You've scored ${score} / ${quizData.length}`);
        
      }
    }
  });
  




