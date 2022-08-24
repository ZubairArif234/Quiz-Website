
const quizData = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      a: "<js>",
      b: "<script>",
      c: "<scripting>",
      d: "<javascript>",
      correct: "b",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      a: "In head section ",
      b: "In body section",
      c: "none of these",
      d: "Both A and B",
      correct: "d",
    },
    {
      question: "How do you create a function in JavaScript?",
      a: "function (){} ",
      b: "function name ({})",
      c: "function name (){}",
      d: "function = name (){}",
      correct: "c",
    },
    {
      question: "How does a FOR loop start?",
      a: "for (i = 0; i=5; i++)",
      b: "for (i=0; i++)",
      c: "for (i=0 ; i<5",
      d: "none of these",
      correct: "a",
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      a: "var arr = {}",
      b: "var arr = ()",
      c: "var arr = []",
      d: "var arr = <>",
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
  




