// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let newPassword = [];

let passwordLength = prompt("Choose how many characters (10 - 64) you would like the password to be")
// Function to prompt user for password options
getPasswordOptions();
function getPasswordOptions() {
  if (passwordLength > 9 && passwordLength <= 64) {
    let special = confirm("Would you like to have special characters in your password")
      if (special === true) {
        newPassword = newPassword.concat(specialCharacters)
      }
    let numeric = confirm("Would you like to have number characters in your password")
      if (numeric === true) {
        newPassword = newPassword.concat(numericCharacters)
      }
    let lower = confirm("Would you like to have lowercase characters in your password")
      if (lower === true) {
        newPassword = newPassword.concat(lowerCasedCharacters)
      }
    let upper = confirm("Would you like to have uppercase characters in your password")
      if (upper === true) {
        newPassword = newPassword.concat(upperCasedCharacters)
      }
    }  
  if (passwordLength <= 9 || passwordLength > 64){
      alert ("Try doing what you're told")
    }
  else if (newPassword.length === 0){
      alert ("You need to select at least ONE option")
    }
}

// Function for getting a random element from an array
function getRandom() {
  return Math.floor(Math.random() * newPassword.length);
}

// Function to generate password with user input
function generatePassword() {
  let finalPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = getRandom(newPassword);
    finalPassword.push(newPassword[randomIndex]);
  }
  return finalPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);