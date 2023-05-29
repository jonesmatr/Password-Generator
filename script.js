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
  // Prompt user for password length and converts it the entry to an integer
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters);"));

//Make sure the password length is between 8 and 128 characters and also check if the entry is a number
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  // Prompt the user to enter a valid password length if the entry is not a number or is not between 8 and 128 characters
  passwordLength = parseInt(prompt("Invalid input. Please ender a valid password length between 8 and 128 characters."));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





