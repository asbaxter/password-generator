// Assignment code here
function generatePassword(){
  // ------------------------ user prompts --------------------------
    var passwordLength = prompt("How many characters would you like you password to be? Pick a number 8 - 128.");
    var lowercase = confirm("Would you like for your password to contain lowercase letters.?");
    var uppercase = confirm("would you like for your password to contain uppercase letters?");
    var numerical = confirm("would you like for your password to contain numbers?");
    var special = confirm("would you like for your password to contain specail characters ");

    // -------------------- arrays containing character options -------------------------------------------
    var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCasedCharacters = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  // --------------------- loop runing program for length of the password ---------------------
  var password = [];  
  
  for (var i = 0; i < passwordLength; i++){

     var characterType = Math.floor(Math.random() * 4);

     if (characterType === 0 && lowercase === true){
        var character = Math.floor(Math.random() * 26);
        password = password +  lowerCasedCharacters[character];
     }
     else if (characterType === 1 && uppercase === true){
      var character = Math.floor(Math.random() * 26);
      password = password + upperCasedCharacters[character];
     }
     else if (characterType === 2 && special === true){
      var character = Math.floor(Math.random() * 23);
      password = password + specialCharacters[character];
     }
     else if (characterType === 3 && numerical === true){
      var character = Math.floor(Math.random() * 10);
      password = password + numericCharacters[character];
     }
     else {
      // ----------- loop continues if random number picks unpickable option based off user choice ---------------------
      i = i - 1;
     }
    }
    return password;
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
