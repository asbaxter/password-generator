// Assignment code here
function generatePassword(password){
  // ------------------------ user prompts --------------------------
    var passwordLength = prompt("How many characters would you like you password to be? Pick a number 8 - 128.");
    var lowercase = confirm("Would you like for your password to contain lowercase letters.?");
    var uppercase = confirm("would you like for your password to contain uppercase letters?");
    var numerical = confirm("would you like for your password to contain numbers?");
    var specail = confirm("would you like for your password to contain specail characters ")

  // console logs for testing purposes  
    console.log(passwordLength);
    console.log(lowercase);
    console.log(uppercase);
    console.log(numerical);
    console.log(specail);

    // -------------------- arrays containing character options -------------------------------------------
    var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCasedCharacters = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
