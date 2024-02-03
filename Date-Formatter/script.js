const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate().toString().padStart(2, '0'); 
const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
const year = date.getFullYear();
const hours = date.getHours().toString().padStart(2, '0'); 
const minutes = date.getMinutes().toString().padStart(2, '0');

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
        currentDateParagraph.innerHTML  = `${month}-${day}-${year}<br>${hours} : ${minutes}`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
