// // JavaScript for Timer and Quiz Questions
// const quizContainer = document.getElementById("quiz-container");
// const questionEl = document.getElementById("question");
// const answersEl = document.getElementById("answers");
// const timerEl = document.getElementById("timer");
// const submitBtn = document.getElementById("submit-btn");

// let questions = [
//     { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
//     { question: "What is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Mars", "Venus"], correct: 1 },
//     { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
//     { question: "Which animal is known as the king of the jungle?", answers: ["Elephant", "Lion", "Tiger", "Giraffe"], correct: 1 },
//     { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 },
//     { question: "What color is the sky on a clear day?", answers: ["Green", "Red", "Blue", "Yellow"], correct: 2 },
//     { question: "What is the capital of Japan?", answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
//     { question: "Which gas do plants absorb during photosynthesis?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
//     { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Avocado", "Onion", "Pepper"], correct: 1 },
//     { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Saturn", "Mars", "Mercury"], correct: 2 }
//     // More questions...
// ];
// let currentQuestionIndex = 0;
// let timeLeft = 30; // 2 minutes in seconds

// function startTimer() {
//     const timerInterval = setInterval(() => {
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
//         timerEl.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//         timeLeft--;

//         if (timeLeft < 0) {
//             clearInterval(timerInterval);
//             endQuiz();
//         }
//     }, 1000);
// }

// function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionEl.textContent = currentQuestion.question;
//     answersEl.innerHTML = "";
    
//     currentQuestion.answers.forEach((answer, index) => {
//         const label = document.createElement("label");
//         label.innerHTML = `
//             <input type="radio" name="answer" value="${index}" class="mr-2"> ${answer}
//         `;
//         label.className = "block p-2 border border-black rounded";
//         answersEl.appendChild(label);
//     });
// }

// function submitAnswer() {
//     const selectedAnswer = document.querySelector('input[name="answer"]:checked');
//     if (!selectedAnswer) return;

//     const answerIndex = parseInt(selectedAnswer.value);
//     const correctAnswer = questions[currentQuestionIndex].correct;

//     if (answerIndex === correctAnswer) {
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         endQuiz();
//     }
// }

// function endQuiz() {
//     alert("Quiz over! Display results here.");
//     // Calculate results and show
// }

// submitBtn.addEventListener("click", submitAnswer);

// // Initialize the quiz
// loadQuestion();
// startTimer();



// // JavaScript to Display Results in Modal
// function displayResults(results) {
//     const resultList = document.getElementById("result-list");
//     resultList.innerHTML = results.map(result => 
//         `<p>${result.school}, ${result.firstName} ${result.lastName}: ${result.score}%</p>`
//     ).join("");
//     document.getElementById("result-modal").classList.remove("hidden");
// }

// function closeModal() {
//     document.getElementById("result-modal").classList.add("hidden");
// }

// // Function to shuffle questions array
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Shuffle questions before the quiz starts
// questions = shuffle(questions);


// // Function to calculate percentage score
// function calculateScore(correctAnswers, totalQuestions) {
//     return Math.round((correctAnswers / totalQuestions) * 100);
// }

// // Function to store leaderboard in localStorage
// function updateLeaderboard(candidate, school, score) {
//     const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
//     leaderboard.push({ candidate, school, score });
//     localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
// }

// // Function to display leaderboard
// function displayLeaderboard() {
//     const leaderboardContainer = document.getElementById('leaderboard-container');
//     const leaderboardList = document.getElementById('leaderboard-list');
    
//     const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
//     leaderboardList.innerHTML = leaderboard.map(entry => 
//         `<p>${entry.candidate} (${entry.school}): ${entry.score}%</p>`
//     ).join("");
    
//     leaderboardContainer.classList.remove('hidden');
// }


// let correctAnswersCount = 0; // Track correct answers

// function submitAnswer() {
//     const selectedAnswer = document.querySelector('input[name="answer"]:checked');
//     if (!selectedAnswer) return;

//     const answerIndex = parseInt(selectedAnswer.value);
//     const correctAnswer = questions[currentQuestionIndex].correct;

//     if (answerIndex === correctAnswer) {
//         correctAnswersCount++; // Increment correct answers
//     }

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         endQuiz();
//     }
// }

// function endQuiz() {
//     // Calculate score
//     const totalQuestions = questions.length;
//     const score = calculateScore(correctAnswersCount, totalQuestions);

//     // Get candidate and school from localStorage
//     const { school, candidate } = JSON.parse(localStorage.getItem('registered'));

//     // Update leaderboard with the score
//     updateLeaderboard(candidate, school, score);

//     // Display final results
//     alert(`Quiz over! You scored ${score}%`);

//     // Display leaderboard
//     displayLeaderboard();
// }



// // -------------------------------------------------------------------------------------------------------------------------
// // Function to display the result modal
// function showResultModal(score) {
//     const modal = document.getElementById('result-modal');
//     const resultMessage = document.getElementById('result-message');
//     modal.classList.remove('hidden'); // Show the modal

//     // Set the result message with the user's score
//     resultMessage.textContent = `Quiz over! You scored ${score}%`;

//     // Close modal button functionality
//     const closeModalBtn = document.getElementById('close-modal-btn');
//     closeModalBtn.addEventListener('click', function() {
//         modal.classList.add('hidden'); // Hide the modal when clicked
//     });
// }

// // End quiz function (updated to show modal)
// function endQuiz() {
//     // Calculate score
//     const totalQuestions = questions.length;
//     const score = calculateScore(correctAnswersCount, totalQuestions);

//     // Get candidate and school from localStorage
//     const { school, candidate } = JSON.parse(localStorage.getItem('registered'));

//     // Update leaderboard with the score
//     updateLeaderboard(firstName, lastName, school, score);

//     // Display the result modal with the score
//     showResultModal(score);

//     // Display leaderboard
//     displayLeaderboard();
// }


// JavaScript for Timer and Quiz Questions

const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const submitBtn = document.getElementById("submit-btn");

let questions = [
    { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "What is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Mars", "Venus"], correct: 1 },
    { question: "What is the boiling point of water?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
    { question: "Which animal is known as the king of the jungle?", answers: ["Elephant", "Lion", "Tiger", "Giraffe"], correct: 1 },
    { question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "What color is the sky on a clear day?", answers: ["Green", "Red", "Blue", "Yellow"], correct: 2 },
    { question: "What is the capital of Japan?", answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
    { question: "Which gas do plants absorb during photosynthesis?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Avocado", "Onion", "Pepper"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Saturn", "Mars", "Mercury"], correct: 2 }
];

let currentQuestionIndex = 0;
let timeLeft = 120; // 2 minutes in seconds
let correctAnswersCount = 0; // Track correct answers

function startTimer() {
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}" class="mr-2"> ${answer}
        `;
        label.className = "block p-2 border border-black rounded";
        answersEl.appendChild(label);
    });
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;

    const answerIndex = parseInt(selectedAnswer.value);
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (answerIndex === correctAnswer) {
        correctAnswersCount++; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function calculateScore(correctAnswers, totalQuestions) {
    return Math.round((correctAnswers / totalQuestions) * 100);
}

function showResultModal(score) {
    const modal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    modal.classList.remove('hidden'); // Show the modal

    
    // Set the result message with the user's score
    resultMessage.textContent = `Congratulation! You scored ${score}%`;

    // Close modal button functionality
    const closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.addEventListener('click', function() {
        modal.classList.add('hidden'); // Hide the modal when clicked
    });
}

function endQuiz() {
    // Calculate score
    const totalQuestions = questions.length;
    const score = calculateScore(correctAnswersCount, totalQuestions);

    // Get candidate and school from localStorage
    const { school, candidate } = JSON.parse(localStorage.getItem('registered'));

    // Update leaderboard with the score
    updateLeaderboard(candidate, school, score);

    // Display the result modal with the score
    showResultModal(score);

    // Display leaderboard
    displayLeaderboard();
}

submitBtn.addEventListener("click", submitAnswer);

// Initialize the quiz
loadQuestion();
startTimer();


// Function to shuffle questions array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle questions before the quiz starts
questions = shuffle(questions);

// Function to store leaderboard in localStorage
function updateLeaderboard(candidate, school, score) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ candidate, school, score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Function to display leaderboard
function displayLeaderboard() {
    const leaderboardContainer = document.getElementById('leaderboard-container');
    const leaderboardList = document.getElementById('leaderboard-list');

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboardList.innerHTML = leaderboard.map(entry => 
        `<p>${entry.school}, ${entry.candidate}, ${entry.score}%</p>`
    ).join("");

    leaderboardContainer.classList.remove('hidden');
}
