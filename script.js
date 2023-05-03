// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthCheck;
var lowecaseLength = 0;
var uppercaseLength = 0;
var numericLength = 0;
var specialLength = 0;
var lowerCase = true;
var upperCase = true;
var numericChar = true;
var specialChar = true;
var passwordlower;
var passwordupper = ["dasdas"];
var passwordnum = ["121232"];
var passwordspecial = ["!@#$"];
var generatePassword;

/*var uperCaseString = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseString = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [1,2,3,4,5,6,7,8,9,0];
var specialString = ["!",'"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',"]","\","^",","_",'`','{','|','}','~',"'"];*/
var lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
var uperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


// Write password to the #password input
function writePassword() {
  var passwordCreate = function() {
    window.alert("How many characters in password do you want to create ?");
    lengthCheck = window.prompt("Length of Password :");
    if(lengthCheck <8 || lengthCheck >128){
      alert("Please generate again!");
      passwordCreate();
    }
    lowerCase = window.confirm("Do you want to include Lowecase character in your password ?");
    upperCase = window.confirm(" Do you want to include uppercase character in your password ? ");
    numericChar = window.confirm(" Do you want to include number character in your password ?");
    specialChar = window.confirm("Do you want to include special character in your password ?");
    return;
  }
  passwordCreate();
  console.log(lengthCheck);
  console.log(lowerCase);
  console.log(upperCase);
  console.log (numericChar);
  console.log(specialChar);
  
  /*if((lowerCase) && (upperCase = false) && (numericChar = false) && (specialChar = false)) {
    lowecaseLength = lengthCheck;
  } else if ((lowerCase) && (upperCase) && (numericChar = false) && (specialChar = false)) {
    uppercaseLength = 2;
    lowecaseLength = lengthCheck - uppercaseLength;
  } else if ((lowerCase) && (upperCase = false) && (numericChar) && (specialChar = false)) {
    numericLength = 2;
    lowecaseLength = lengthCheck - numericLength;
  } else if ((lowerCase) && (upperCase = false) && (numericChar = false) && (specialChar)) {
    specialLength = 2;
    lowecaseLength = lengthCheck - specialLength;
  } else if ((lowerCase) && (upperCase) && (numericChar) && (specialChar = false)) {
    uppercaseLength = 2;
    numericLength = 2;
    lowecaseLength = lengthCheck - (uppercaseLength + numericLength);
  } else if ((lowerCase) && (upperCase) && (numericChar = false) && (specialChar)) {
    uppercaseLength = 2;
    specialLength = 2;
    lowecaseLength = lengthCheck - (uppercaseLength + specialLength);
  } else if ((lowerCase) && ( upperCase = false) && (numericChar) && (specialChar)) {
    numericLength = 2;
    specialLength = 2;
    lowecaseLength = lengthCheck - (numericLength + specialLength);
  } else if ((lowerCase = false) && (upperCase) && (numericChar = false) && (specialChar = false)) {
    uppercaseLength = lengthCheck;
  } else if ((lowerCase = false) && (upperCase) && (numericChar) && (specialChar = false)) {
    numericLength = 2;
    uppercaseLength = lengthCheck - numericLength;
  } else if ((lowerCase = false) && (upperCase) && (numericChar = false) && (specialChar)) {
    specialLength = 2;
    uppercaseLength = lengthCheck - specialLength;
  } else if ((lowerCase = false) && (upperCase = false) && (numericChar) && (specialChar = false)) {
    numericLength = lengthCheck;
  } else if ((lowerCase = false) && (upperCase = false) && (numericChar) && (specialChar)) {
    specialLength = 2;
    numericLength = lengthCheck - specialLength;
  } else {
    specialLength = lengthCheck;
  }*/
  if((lowerCase =true) && (upperCase = true) && (numericChar = false) && (specialChar = false)) {
    uppercaseLength = 2;
    lowecaseLength = lengthCheck - uppercaseLength;
  } else {
    lowecaseLength = 5;
    numericLength = lengthCheck - lowecaseLength;
  }
  
  passwordlower = "chaythu";
  console.log(lowecaseLength);
  console.log(uppercaseLength);
  console.log(numericLength);
  console.log(specialLength);
  

  var password = passwordlower;
  var passwordText = document.querySelector("#password");
  
  passwordText.placeholder = password;
  console.log(passwordText);
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


