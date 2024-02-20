const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

// function convertToRoman(num) {
//   let result = "";
//   for (let i = 0; i < romanNumerals.length; i++) {
//     while (num >= romanNumerals[i].value) {
//       result += romanNumerals[i].numeral;
//       num -= romanNumerals[i].value;
//     }
//   }
//   return result;
// }

// function convertToRoman(num) {
//   let result = "";
//   romanNumerals.forEach(function(item) {
//   while (num >= item.value) {
//   result += item.numeral;
//   num -= item.value;
//   }
//   });
//   return result;
//   }

function convertToRoman(num) {
  let result = "";
  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });
  return result;
}

function convert() {
  const inputValue = parseInt(inputNumber.value);
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 3999) {
    output.classList.add("alert", "output");
    if (isNaN(inputValue)) {
      output.innerText = "Please enter a valid number";
    } else if (inputValue < 1) {
      output.innerText = "Please enter a number greater than or equal to 1";
    } else {
      output.innerText = "Please enter a number less than or equal to 3999";
    }
  } else {
    output.classList.remove("alert");
    output.classList.add("output");
    output.innerText = convertToRoman(inputValue);
  }
}

document.body.appendChild(output);
convertBtn.addEventListener("click", convert);





