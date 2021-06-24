// Static Variables
var hasUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hasUpperArray = hasUpper.split("");
var hasLower = "abcdefghijklmnopqrstuvwxyz";
var hasLowerArray = hasLower.split("");
var hasNum = "0123456789";
var hasNumArray = hasNum.split("");
var symbol = "!#$%&()*+,-./:;<=>?@^[]^_`{|}~";
var symbolArray = symbol.split("");
var generateBtn = document.querySelector("#generate");

// Event listener for generate password function
generateBtn.addEventListener("click", writePassword);

// Password generation function
function writePassword() {
    var allChars = [];
    var resultPass = "";

    // Dynamic variables
    var Totlength = prompt("How many characters would you like your password to be?\n8-128");

    if (Totlength < 8 || Totlength > 128) {
        alert("Your password needs to be between 8 and 128 characters. Please restart.");
    }
    // Confirm password parameters
    else {
        if (confirm("Contain upper case letters?")) {
            Array.prototype.push.apply(allChars, hasUpperArray);
        }
        if (confirm("Contain lower case letters?")) {
            Array.prototype.push.apply(allChars, hasLowerArray);
        }
        if (confirm("Contain numbers?")) {
            Array.prototype.push.apply(allChars, hasNumArray);
        }
        if (confirm("Ccontain symbols?")) {
            Array.prototype.push.apply(allChars, symbolArray);
        }
        if (allChars.length === 0) {
            alert("You must select at lease 1 type of characters to generate a password! Please restart.");
        }
        // For loop used to confirm info then generate password
        else {
            for (var i = 0; i < Totlength; i++) {
                var random = Math.floor(Math.random() * allChars.length);
                resultPass += allChars[random];
            }
        }
    }
    // Display password
    document.getElementById("password").innerHTML = resultPass;
}