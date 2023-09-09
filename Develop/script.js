// ASSIGNMENT CODE HERE

// Define character arrays for password criteria to choose from
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate password
function generatePassword() {

  // Prompt to ask the person how long they want their password to be
  var length = prompt("Choose your password length from 8 - 128 characters")

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters in numeric values");
    return "";
  }

  // Creates prompt messages about whether or not to include lowercase characters, uppercase characters, numberic characters and special characters.
  var includeLowercase = confirm("Include lowercase characters? (OK = Yes and Cancel = No)");
  var includeUppercase = confirm("Include uppercase characters? (OK = Yes and Cancel = No)");
  var includeNumeric = confirm("Include numeric characters? (OK = Yes and Cancel = No)");
  var includeSpecial = confirm("Include special characters? (OK = Yes and Cancel = No)");

  // Combines user inputs into a character set
  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseCharacters;
  if (includeUppercase) characterSet += uppercaseCharacters;
  if (includeNumeric) characterSet += numericCharacters;
  if (includeSpecial) characterSet += specialCharacters;

  // Checks if person didn't select any character types
  if (characterSet === "") {
    alert("Please select at least one character type.");
    return "";
  }
  
  // Math calculations for random generation of password
  var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet.charAt(randomIndex);
    }

  return password;
}

//PROVIDED CODE

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
