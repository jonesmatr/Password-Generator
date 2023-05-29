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
  // Prompt the user to enter a valid password length if the entry is not a number or is not between 8 and 128 characters.
  passwordLength = parseInt(prompt("Invalid input. Please ender a valid password length between 8 and 128 characters."));
}
//Create criteria for password

//Create variables for the different character types (lowercase, uppercase, numeric, and special characters)

//Ask for character types to use in password and confirm those choices (each choice will be a separate prompt and confirm)

//Create function that checks that at least one character type is selected. Use if...else statement to check if at least one character type is selected. If not, alert the user to select at least one character type and return to the beginning of the function.

//If all the criteria are met, use a function that generates password based on criteria. Use for loop to generate password. Use Math.floor(Math.random() * passwordLength) to generate random password. 

//Return the generated password in the box on the screen. 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





