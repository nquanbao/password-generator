// Assignment Code
var generateBtn = document.querySelector("#generate");
let lengthCheck;
let lowerCase;
let lowecaseLength;
let upperCase;
let uppercaseLength;
let numericChar;
let numericLength;
let specialChar;
let specialLength;
passwordCriteria = function(){
  lowerCase = window.confirm("Do you want to include Lowecase character in your password ?");
  upperCase = window.confirm(" Do you want to include uppercase character in your password ? ");
  numericChar = window.confirm(" Do you want to include number character in your password ?");
  specialChar = window.confirm("Do you want to include special character in your password ?");
}
/*passwordCriteriaCheck = function (){
  let i = 0;
  if(lowerCase){
    i++;
  } else{
    if(upperCase){
      i++;
    } else {
      if(numericChar){
        i++;
      } else {
        if(specialChar){
          i++;
        }
      }
    }
  }
  return i;
}*/
generateBtn.onclick = function (){
  window.alert("How many characters in password do you want to create ?");
  lengthCheck = window.prompt("Length of Password :");
  if(lengthCheck <8 || lengthCheck >128){
    window.alert("Please generate again!");
    generateBtn.addEventListener();
  }
  window.alert("Please add some criterias for your password!");
  passwordCriteria();
  /*passwordCriteriaCheck();
  if(i=0){
    window.alert("Please chose your password criteria again!");
    passwordCriteria();
  }*/
}
let uperCaseString = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowercaseString = uperCaseString.toLowercase();
let number = [1,2,3,4,5,6,7,8,9,0];
let specialString = ["!",'"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',"]","\","^",","_",'`','{','|','}','~',"'"];
let generatePassword;

if((lowerCase) && (upperCase = false) && (numericChar = false) && (specialChar = false)){
  lowecaseLength = lengthCheck;
  return lowecaseLength;
} else if ((lowerCase) && (upperCase) && (numericChar = false) && (specialChar = false)) {
  uppercaseLength = 2;
  lowecaseLength = lengthCheck - uppercaseLength;
  return uppercaseLength, lowecaseLength;
} else if ((lowerCase) && (upperCase = false) && (numericChar) && (specialChar = false)) {
  numericLength = 2;
  lowecaseLength = lengthCheck - numericLength;
  return numericLength, lowecaseLength;
} else if ((lowerCase) && (upperCase = false) && (numericChar = false) && (specialChar)) {
  specialLength = 2;
  lowecaseLength = lengthCheck - specialLength;
  return specialLength, lowecaseLength;
} else if ((lowerCase) && (upperCase) && (numericChar) && (specialChar = false)) {
  uppercaseLength = 2;
  numericLength = 2;
  lowecaseLength = lengthCheck - (uppercaseLength + numericLength);
  return uppercaseLength, numericLength, lowecaseLength;
} else if ((lowerCase) && (upperCase) && (numericChar = false) && (specialChar)) {
  uppercaseLength = 2;
  specialLength = 2;
  lowecaseLength = lengthCheck - (uppercaseLength + specialLength);
  return uppercaseLength, specialLength, lowecaseLength;
} else if ((lowerCase) && ( upperCase = false) && (numericChar) && (specialChar)) {
  numericLength = 2;
  specialLength = 2;
  lowecaseLength = lengthCheck - (numericLength + specialLength);
  return numericLength, specialLength, lowecaseLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
