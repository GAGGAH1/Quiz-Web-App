// JavaScript for Registration Handling
const registrationForm = document.getElementById("signup-form");
const fineMessage = document.getElementById("fine-message");
const deadline = new Date("2024-10-01");
const errorMessage = document.getElementById('error-message')

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const school = document.getElementById("school-name").value.trim();
    const candidate = document.getElementById("candidate-name").value.trim();
    // Validate input fields
    if (!school || !candidate) {
        errorMessage.textContent = "Both School Name and Candidate Name are required!";
        errorMessage.classList.remove("hidden");
        return;
    } else {
        errorMessage.classList.add("hidden"); 
    }
    const now = new Date();
    if (now > deadline) {
        fineMessage.classList.remove("hidden");
    } else {
        fineMessage.classList.add("hidden");
        alert("Registration Successful");
        // Save registration info to localStorage
        localStorage.setItem("registered", JSON.stringify({ school, candidate }));
        // alert("Successfully Registered")
        window.location.href = 'quiz.html' 
    }
});
