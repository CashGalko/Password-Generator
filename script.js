// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for possible characters

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "0123456789".split("");
var specialChar = "!@#$%^&*()".split("");

// Empty array for final password (allows concat)



// Function needed to generate the password

function generatePassword() {
  var finalPassword = [];
  // Confirm password length
  var passwordLength = prompt("Enter a value for your password's length (Must be between 8 & 128).");
  // Error message for incorrect password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 & 128 characters. Please enter a new value");
    // Runs the function again to allow them to enter a new value. 
    generatePassword();
  };
 

  // If they enter a correct value,
  // define variables that coinside with their respective global arrays
  var addLower = confirm("Include lowercase letters in your password?");
  var addUpper = confirm("Include uppercase letters in your password?");
  var addNumeric = confirm("Include numeric values in your password?");
  var addSpecial = confirm("Include special characters in your password?"); 

  // Add an if statement that concats all of the arrays to generate final password.
  
  if (addLower){
    finalPassword = finalPassword.concat(lowerCase);
  }
  if (addUpper){
    finalPassword = finalPassword.concat(upperCase);
  }
  if (addNumeric){
    finalPassword = finalPassword.concat(numeric);
  }
  if (addSpecial){
    finalPassword = finalPassword.concat(specialChar);
  }
  else{
    alert("Then why are you using this program :)");
    generatePassword();
  }

  console.log(finalPassword)
  
  var blankPass = ""
  for (var i = 0; i < passwordLength; i++) { 
    var index = Math.floor(Math.random() * finalPassword.length);
    blankPass = blankPass + finalPassword[index]
    

  }

  console.log(blankPass);
  return blankPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
