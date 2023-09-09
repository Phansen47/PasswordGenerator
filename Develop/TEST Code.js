// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define character sets for password criteria
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate a random password based on criteria
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return "";
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase characters? (Yes or No)");
  var includeUppercase = confirm("Include uppercase characters? (Yes or No)");
  var includeNumeric = confirm("Include numeric characters? (Yes or No)");
  var includeSpecial = confirm("Include special characters? (Yes or No)");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Create a character set based on selected criteria
  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

