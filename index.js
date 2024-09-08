// JavaScript for Registration Handling
const registrationForm = document.getElementById("signup-form");
const fineMessage = document.getElementById("fine-message");
const deadline = new Date("2024-10-01");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const now = new Date();
    if (now > deadline) {
        fineMessage.classList.remove("hidden");
    } else {
        fineMessage.classList.add("hidden");
        alert("Registration Successful");
        // Save registration info to localStorage
        const school = document.getElementById("school-name").value;
        const candidate = document.getElementById("candidate-name").value;
        
        localStorage.setItem("registered", JSON.stringify({ school, candidate }));
        // alert("Successfully Registered")
        window.location.href = 'quiz.html' 
    }
});
