// Assignment code here
var randomstring = '';
var charactersToBeSet = '';
var pLength = 0;
var characterTypes = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!\"#$%&'()*+,-.:;<=>?@[\ ]^_`{|}~"
];
var characterSets = [
  "lowercase",
  "uppercase",
  "numeric",
  "special"
];

function generatePassword(){
  passwordCharacterSet();
  pLength = passwordLength()

  for(var i = 0; i < pLength; i++){
    var rnum = Math.floor(Math.random() * charactersToBeSet.length);
		randomstring += charactersToBeSet.substring(rnum , rnum + 1);
  }
};

function passwordLength(){
  var passLength = window.prompt("Password Length");

  if (passLength >= 8 && passLength <= 128){
    return passLength;
  } else {
    if(passLength < 8){
      window.alert("Password length too low.");
      passwordLength();
    }else{
      window.alert("Password length too high.");
      passwordLength();
    }
  }
};

function passwordCharacterSet(){
  for(var int = 0; int < 4; int ++){
    var passChar = window.prompt("Would you like " + characterSets[int] + " characters?");

    var lowerCased = passChar.toLowerCase();

    switch(lowerCased){
      case "yes":
          charactersToBeSet += characterTypes[int];
    }
  }
  if(charactersToBeSet == ""){
    window.alert("Please type at least one character set.")
    passwordCharacterSet();
  } else {
    return charactersToBeSet;
  }
};

function reset(){
  randomstring = '';
  charactersToBeSet = '';
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomstring;
  window.alert("Your password is " + randomstring);
  reset();
};

generateBtn.addEventListener("click", function() { writePassword() });
