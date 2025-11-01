function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Reference to feedback paragraph
    const feedback = document.getElementById("feedback");

    // If no option selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545";
        return;
    }

    // Get the value of selected answer
    const userAnswer = selectedOption.value;

    // Compare and display result
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
