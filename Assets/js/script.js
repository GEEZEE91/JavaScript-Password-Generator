// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//Define character options arrays for each option
const lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
const upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const number =  ['1234567890'];
const symbol = ['!@#$%^&*()<>?'];

//Prompt User for password length
  var userInput = window.prompt("Please confirm total characters you want in your password? MUST BE between 8 to 128 characters")
  passwordLength = parseInt(userInput)

// Validate Input is a Number
  if (isNaN(passwordLength)) {
      window.alert("INVALID - Number Digit for Password Length not Entered")
      return
  }

// Validate user input meets pw length criteria - ie between 8 and 128 characters
  if(passwordLength < 8 || passwordLength > 128) {
//If less than 8 or more than 128 characters - ALERT user input invalid 
    window.alert("INVALID - Password length must be between 8 and 128 characters")
    return
  }

//Prompt User to confirm what characters the password will contain
var includeNumbers = window.confirm("Do you want numbers in the password?")
var includeLowercase = window.confirm("Do you want lowercase letters in the password?")
var includeUppercase = window.confirm("Do you want uppercase letters in the password?")
var includeSymbols = window.confirm("Do you want symbols in the password?")

//Validate one of the 4 character criteria was selected
if(!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols){
//If no criteria selected - ALERT user invalid they must select at least one criteria
  alert("INVALID - Please select at least one criteria for the characters to be included in the password");
  return;
}

// create new variable that will group together user selected options
let Selectedoptions = ""
//function to confirm if user selected true of false on specific criteria, if yes add to new var
if (includeNumbers === true) {
  Selectedoptions= Selectedoptions + number;
}
if (includeLowercase === true) {
  Selectedoptions= Selectedoptions + lowerCase;
}
if (includeUppercase === true) {
  Selectedoptions= Selectedoptions + upperCase;
}
if (includeSymbols === true) {
  Selectedoptions= Selectedoptions + symbol;
}

//Run math.random * new var length to select random character from new user inputs var. 
//Loop random selection in that var as many times as user requested for pw length
let passwordCharacters = ""
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = Selectedoptions[ Math.floor( Math.random() * Selectedoptions.length)];
    passwordCharacters = passwordCharacters + characterCode; 
  }
// return the password
  return passwordCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);