// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

 

  var userInput = window.prompt("What length do you want you password to be? Please select length between 8 to 128 characters")
  var passwordLength = parseInt(userInput)


  if (isNaN(passwordLength)) {
      window.alert("INVALID - Number Value not entered")
      return
  }

 

  if(passwordLength < 8 || passwordLength > 128) {
    window.alert("INVALID - Password length must be between 8 and 128 characters")
    return
  }

 

var userIncludeNumbers = window.confirm("Do you want numbers in the password")

var userIncludeLowercase = window.confirm("Do you want lowercase letters in the password")

var userIncludeUppercase = window.confirm("Do you want uppercase letters in the password")

var userIncludeSymbols = window.confirm("Do you want symbols in the password")

 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
