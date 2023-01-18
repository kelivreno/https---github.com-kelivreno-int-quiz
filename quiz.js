const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result-div");

const correctAnswers = {
question1: "Paris",
question2: "Jupiter"
};

quizForm.addEventListener("submit", function(e) {
e.preventDefault();
let score = 0;
const userAnswers = {
question1: quizForm.question1.value,
question2: quizForm.question2.value
};
for (const key in correctAnswers) {
if (userAnswers[key] === correctAnswers[key]) {
score++;
}
}
resultDiv.innerHTML =`You scored ${score} out of 2`  ;
});

document.getElementById("hint-1").addEventListener("click", function(){
    alert("The capital of France is a city known for its iconic landmarks such as the Eiffel Tower and the Louvre Museum.");
 });
 
 document.getElementById("hint-2").addEventListener("click", function(){
    alert("This planet is often referred to as the 'king of the planets' and is the fifth planet from the sun in our solar system.");
 });