const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function checkInputValue() {
  const phoneNumber = input.value;
  const phoneRegExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  if (phoneNumber === "") {
    alert("Please provide a phone number");
  } else if (phoneRegExp.test(phoneNumber)) {
    results.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    results.textContent =`Invalid US number: ${phoneNumber}`;
  }
}

checkButton.addEventListener("click", checkInputValue);
clearButton.addEventListener("click", ()=>{
    input.value = '';
    results.textContent = '';
})
