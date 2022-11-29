// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = prompt(
    "How long do you want your password to be? Please enter a number from 10 to 64."
  );

  //Check if user input is a number between 10 and 64
  if (passLength < 10 || passLength > 64 || isNaN(passLength)) {
    var passLength = prompt("Please enter a number from 10 to 64!");
  }

  //Ask which types of characters should be included in the password
  var numPass = confirm("Do you want any numbers in your password?");
  var charPass = confirm(
    "Do you want any special characters in your password?"
  );
  var lowPass = confirm("Do you want any lowercase letters in your password?");
  var upPass = confirm("Do you want any uppercase letters in your password");

  //Create a set of characters for the password based on user input
  var characterSet = [];
  if (numPass === true) {
    characterSet = characterSet.concat(numericCharacters);
  }

  if (charPass === true) {
    characterSet = characterSet.concat(specialCharacters);
  }

  if (lowPass === true) {
    characterSet = characterSet.concat(lowerCasedCharacters);
  }

  if (upPass === true) {
    characterSet = characterSet.concat(upperCasedCharacters);
  }

  //Return the selected character set and desired password length
  return [characterSet, passLength];
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * (arr.length - 1));
  var item = arr[randomIndex];
  return item;
}

// Function to generate password with user input
function generatePassword() {
  var setLen = getPasswordOptions();
  var genPass = "";
  //Check if the character set is empty
  if (setLen[0].length === 0) {
    alert("Your character set is empty.");
    return " ";
  }
  //Loop that generates the password
  for (var i = 0; i < setLen[1]; i++) {
    genPass += getRandom(setLen[0]);
  }
  return genPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
