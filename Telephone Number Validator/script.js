const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function checkInputValue() {
  const number = parseInt(input.value);
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (!isNaN(number)) {
    results.textContent = `Valid US number: ${number}`;
  }
}
checkButton.addEventListener("click", checkInputValue);
