// Assignment Code
let generateBtn = document.querySelector("#generate");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase;
const numeric = "0123456789";
const specChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  // input should be validated 
  // at least one character type selected
  //while password.length < length
  //how to add 
}
function generatePassword() {
  let password = "";
  let length = prompt("How long do you want your password to be?", "Choose a number between 8 and 128.");
  let hasLowerCase = confirm("Do you want your password to contain lowercase characters?");
  let hasUpperCase = confirm("Do you want your password to contain uppercase characters?");
  let hasNumeric = confirm("Do you want your password to contain numbers?");
  let hasSpecChar = confirm("Do you want your password to contain special characters?");
  if ( hasLowerCase || hasUpperCase || hasNumeric || hasSpecChar ) {
    while (password.length < length) {
      if (hasLowerCase) {
        password += lowercase.charAt(lowercase.length * Math.random());
      } 
      if (hasUpperCase) {
        password += uppercase.charAt(uppercase.length * Math.random());
      }
      if (hasNumeric) {
        
      } 
      if (hasSpecChar) {
        
      }
    }
  } else {
    alert("Please select at least one type of character to be in your password")
  }
  
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
