// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password based on criteria
function generatePassword() {
  // Prompt user for password length
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters);"));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





