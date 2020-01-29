const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('questionContainer');
const questionElement = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
// startButton.addEventListener('click', timer());

nextButton.addEventListener('click', () =>{
  currentQuestionIndex++;
  console.log("we go!");
  setNextQuestion();
})


function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() =>Math.random() - .5);
  currentQuestionIndex = 0;
  console.log(questionContainerElement);
  questionContainerElement.removeAttribute('class');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(questions) {
  questionElement.innerText = questions.question;
  questions.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });

}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer() {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex +1){
  nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'What is 2 +2?',
    answers: [
      {text: '4', correct: true},
      {text: '22', correct: false}
      
    ]
  },
  {
    question: 'What is 2 +3?',
    answers: [
      {text: '5', correct: true},
      {text: '22', correct: false}

    ]
  },
  {
    question: 'What is 2 +4?',
    answers: [
      {text: '6', correct: true},
      {text: '22', correct: false}

    ]
  },
  {
    question: 'What is 2 +5?',
    answers: [
      {text: '7', correct: true},
      {text: '22', correct: false}

    ]
  },
  {
    question: 'What is 2 +6?',
    answers: [
      {text: '8', correct: true},
      {text: '22', correct: false}

    ]
  }
]






