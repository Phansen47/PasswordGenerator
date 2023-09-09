// Assignment code here


// Define character arrays for password criteria to choose from
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

// If statements abouts characters

// Function to generate password
function generatePassword() {
  // Prompt to ask the person how long they want their password to be
  var length = prompt("Choose your password length from 8 - 128 characters")

  // Creates prompt messages about whether or not to include lowercase characters, uppercase characters, numberic characters and special characters.
  var includeLowercase = confirm("Include lowercase characters? (Confirm = Yes and Cancel = No)");
  var includeUppercase = confirm("Include uppercase characters? (Confirm = Yes and Cancel = No)");
  var includeNumeric = confirm("Include numeric characters? (Confirm = Yes and Cancel = No)");
  var includeSpecial = confirm("Include special characters? (Confirm = Yes and Cancel = No)");

  // Combines user inputs into a character set
  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;
}


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
