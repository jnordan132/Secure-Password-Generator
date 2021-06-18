// // Write password to the #password input
function writePassword(length, symbols, upper, lower, number) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
}
// DOM elements
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const symbolsEl = document.getElementById("symbols");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const buttonEl = document.getElementById("generate");

const randomFunc = {
    symbol: randomSpecial,
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber
};

// Generators

function randomSpecial() {
    const symbols = "!@#$%^&*()_{}[]=<>?.,";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Add event listener to generate button
buttonEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasSymbol = symbolsEl.checked;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numbersEl.checked;

    passwordEl.innerText = writePassword(length, hasSymbol, hasUpper, hasLower, hasNumber);
});