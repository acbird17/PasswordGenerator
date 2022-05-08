var passwordLength = prompt("Enter desired password length. (8-128)");
if (passwordLength < 8 || passwordLength > 128) {
  prompt("Please enter a value between 8 and 128.");
}
//Global variables
var alphasLower = "abcdefghijklmnopqrstuvwxyz";
var alphasUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "~!@#$%^&*()-_?/<>,.";
var inputLower = confirm("Do you want lower case letters?");
var inputUpper = confirm("Do you want uppercase letters?");
var inputNumbers = confirm("Do you want any numbers?");
var inputSpecial = confirm("Do you want any special characters?");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var totalCharacters = "";
  if (inputLower) totalCharacters = alphasLower;
  if (inputUpper) totalCharacters += alphasUpper;
  if (inputNumbers) totalCharacters += numbers;
  if (inputSpecial) totalCharacters += special;
  console.log(totalCharacters);
  var password = "";
  var totalArray = totalCharacters.split("");
  for (i = 0; i < passwordLength; i++) {
    var x = Math.floor(Math.random() * (totalArray.length - 1));
    password += totalArray[x];
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
