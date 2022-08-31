// Assignment Code



var generateBtn = document.querySelector("#generate");


function generatePassword(){


  

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const number =  ['1','2','3','4','5','6','7','8','9','0'];
const symbol = ['!','@','#','$','%','^','&','*','?'];

 //Prompt User for password length

  var userInput = window.prompt("What length do you want you password to be? Choose a number for password length  between 8 and 128 characters")
  passwordLength = parseInt(userInput)

// Validate Input is a Number
  if (isNaN(passwordLength)) {
      window.alert("INVALID - Number Digit for Password Length not Entered")
      return
  }

 
// Validate Input length is a between 8 and 128 characters

  if(passwordLength < 8 || passwordLength > 128) {
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
  alert("INVALID - Please select at least one criteria for the characters");
  return;
}

let Selectedoptions = ""

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


let passwordCharacters = ""

  for (let ii = 0; ii < passwordLength; ii++) {
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