
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdown = document.getElementById("countdown") 

setInterval(updatecount, 1000)

function updatecount (){
  const minutes = Math.floor(time / 60);
  let second = time % 60;

  countdown.innerHTML = `${minutes}:${second}`;
  time--;
  if(countdown.innerHTML == "-1:-1" ){
    clearInterval(countdown)
    alertsc.style.display = "block"
        htmlcard.style.display = "none"

        alertsc.innerHTML=(`You've scored ${score} / ${quizData.length} <br /> <a href="main.html">Go Back </a>`);
        window.localStorage.setItem("html",`${score} / ${quizData.length} `)
  }
}





  // document.documentElement.requestFullscreen()
  // .then(() => console.log('ful screen activated'))
  // .catch(() => console.log("err" = "error"))




const quizData = [
    {
      question: "HTML stands for?",
      a: "HyperLink Markup Language",
      b: "HyperText Markup Language",
      c: "Home Tool Markup Language",
      d: "HyperText Multi Language",
      correct: "b",
    },
    {
      question: "Which of these is a Programming Language?",
      a: "HyperText Markup Language",
      b: "Cascading StyleSheet",
      c: "Twitter Bootstrap",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What is Computer Coding?",
      a: "A Radio Show",
      b: "List of Functions",
      c: "Giving Instructions to Computer",
      d: "StyleSheets",
      correct: "c",
    },
    {
      question: "true is a",
      a: "Boolean",
      b: "String",
      c: "Number",
      d: "BigInt",
      correct: "a",
    },
    {
      question: "Computer only Understand",
      a: "Assembly Language",
      b: "High Level Language",
      c: "Machine Language",
      d: "Application",
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
    alertsc.innerHTML=(` You've scored ${score} / ${quizData.length} <br /> <a href="main.html">Go Back </a>`)
    window.localStorage.setItem("html",`${score} / ${quizData.length} `)
  
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
       
      
      }
      // setTimeout(window.location="main.html",3000);
    }
     
  });
  

  



