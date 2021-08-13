// Assignment Code
let generateBtn = document.querySelector("#generate");
//Creates constants that hold every possible char that the generatePassword function can pull from
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  // input should be validated ALMOST
  // at least one character type selected
  //while password.length < length
  //how to add 
}
function generatePassword() {
  //Creates the variable that each char will be randomly inserted into 
  let password = "";
  //User input booleans and length prompt
  let length = prompt("How long do you want your password to be?", "Choose a number between 8 and 128.");
  //Validates user input for length before asking any other questions
  while (length === "" || length === null || length > 128 || length < 8){
    length = prompt("Please choose a password length between 8 and 128.");
  } 

  let hasLowerCase = confirm("Do you want your password to contain lowercase characters?");
  let hasUpperCase = confirm("Do you want your password to contain uppercase characters?");
  let hasNumeric = confirm("Do you want your password to contain numbers?");
  let hasSpecChar = confirm("Do you want your password to contain special characters");
  //Validates user input for booleans
  if ( hasLowerCase || hasUpperCase || hasNumeric || hasSpecChar ) {
    while (password.length < length) {
      if (hasLowerCase) {
        password += lowercase.charAt(lowercase.length * Math.random());
      } 
      if (hasUpperCase) {
        password += uppercase.charAt(uppercase.length * Math.random());
      }
      if (hasNumeric) {
        password += numeric.charAt(numeric.length * Math.random());
      } 
      if (hasSpecChar) {
        password += specChar.charAt(specChar.length * Math.random());
      }
    }
  } else {
    //If user didnt select at least one type of char, they will be prompted to try again and select from the possible types of characters again.
    alert("Please select at least one type of character to be in your password");
    hasLowerCase = confirm("Do you want your password to contain lowercase characters?");
    hasUpperCase = confirm("Do you want your password to contain uppercase characters?");
    hasNumeric = confirm("Do you want your password to contain numbers?");
    hasSpecChar = confirm("Do you want your password to contain special characters");
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
