// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password based on criteria
function generatePassword() {
  
  // Prompt user for password length and converts it the entry to an integer
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

//Make sure the password length is between 8 and 128 characters and also check if the entry is a number
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  // Prompt the user to enter a valid password length if the entry is not a number or is not between 8 and 128 characters.
  passwordLength = parseInt(prompt("Invalid input. Please ender a valid password length between 8 and 128 characters:"));
}

//Use a for loop to reduce the number of prompts and confirms. This replaces the commented out code below. 
var characterTypes = [
  { name: "lowercase", value: "abcdefghijklmnopqrstuvwxyz", include: false },
  { name: "uppercase", value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", include: false },
  { name: "numeric", value: "0123456789", include: false },
  //I used a regular expression for special characters because it was easier to define the array that way. Some of the characters, like the ";" were creating problems.
  { name: "special", value: /[!@#\$%\^\&*\(\)\_\+\-\=\[\]{};':"\\|,.<>\/\?]/g, include: false }
];

//Create an empty array to store the selected character types
var selectedTypes = [];

//Create a variable to store the confirmed status of the character types
var confirmed = false;

//This iterates through the characterTypes array and asks the user to confirm if they want to include each character type. If the user does not select any of the character types they are alerted to make a selection and brought back to the first character type selection.
while (!confirmed) {
for (var i = 0; i < characterTypes.length; i++) {
  var type = characterTypes[i];

//Ask for character types to use in password and confirm those choices (each choice will be a separate prompt and confirm)
  var confirmMessage = "Include " + type.name + " characters?";
  var typeConfirmed = confirm(confirmMessage);
  
//If the user confirms the character type, add it to the selectedTypes array. This adds selected character types to the selectedTypes array, which will act as a pool of characters to choose from when generating the password.
    if (typeConfirmed) {
      selectedTypes.push(type.value);
    }
    type.include = typeConfirmed;
  }

//If the user does not select any of the character types they are alerted to make a selection and brought back to the first character type selection.
if (selectedTypes.length === 0) {
    alert("You must select at least one character type!");
  } else {
    confirmed = true;
  }
}

//Combine the selected character types into a single string using the join method. This will concatenate the elements in the array together without any spaces between them.
var characterSet = selectedTypes.join("");

//If all the criteria are met, use a function that generates password based on criteria. Use for loop to generate password. Use Math.floor(Math.random() * passwordLength) to generate random password. 
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  password += characterSet[randomIndex];
}

//Return the generated password in the box on the screen using the #password to located the textarea in the html. 
return password;
}