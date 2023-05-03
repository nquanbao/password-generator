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
var passwordlower = [''];
var passwordupper = [''];
var passwordnum = [''];
var passwordspecial = [''];
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
    lengthCheck = window.prompt("How many characters in password do you want to create ?" + "\nPlease choose the length of your Password :");
    if(lengthCheck <8 || lengthCheck >128){
      alert("Please choose the length of Password again (min 8 and max 128)");
      passwordCreate();
    }
    lowerCase = window.confirm("Do you want to include Lowecase character in your password ?");
    upperCase = window.confirm(" Do you want to include uppercase character in your password ? ");
    numericChar = window.confirm(" Do you want to include number character in your password ?");
    specialChar = window.confirm("Do you want to include special character in your password ?");
    if((lowerCase === false) && (upperCase === false) && (numericChar === false) && (specialChar === false)) {
      alert("Password has to have at least one type of characters" + " Please click to generate password again!");
      return generateBtn.addEventListener("click", writePassword);
    }
    return;
  }
  passwordCreate();
  console.log(lengthCheck);
  console.log(lowerCase);
  console.log(upperCase);
  console.log (numericChar);
  console.log(specialChar);
  
  if((lowerCase === true) && (upperCase === false) && (numericChar === false) && (specialChar === false)) {
    lowecaseLength = lengthCheck;
  } else if ((lowerCase === true) && (upperCase === true) && (numericChar === false) && (specialChar === false)) {
    uppercaseLength = 2;
    lowecaseLength = lengthCheck - uppercaseLength;
  } else if ((lowerCase === true) && (upperCase === true) && (numericChar === true) && (specialChar === false)) {
    numericLength = 2;
    uppercaseLength = 2;
    lowecaseLength = lengthCheck - 4;
  } else if ((lowerCase === true) && (upperCase === true) && (numericChar === false) && (specialChar === true)) {
    uppercaseLength = 2;
    specialLength = 2;
    lowecaseLength = lengthCheck - 4;
  } else if ((lowerCase === true) && (upperCase === false) && (numericChar === true) && (specialChar === true)) {
    numericLength = 2;
    specialLength = 2;
    lowecaseLength = lengthCheck - 4;
  } else if ((lowerCase === true) && (upperCase === false) && (numericChar === true) && (specialChar === false)) {
    numericLength = 2;
    lowecaseLength = lengthCheck - 2;
  } else if ((lowerCase === true) && (upperCase === false) && (numericChar === false) && (specialChar === true)) {
    specialLength = 2;
    lowecaseLength = lengthCheck -2;
  } else if ((lowerCase === false) && (upperCase === true) && (numericChar === false) && (specialChar === false)) {
    uppercaseLength = lengthCheck;
  } else if ((lowerCase === false) && (upperCase === true) && (numericChar === true) && (specialChar === false)) {
    numericLength = 2;
    uppercaseLength = lengthCheck - 2;
  } else if ((lowerCase === false) && (upperCase === true) && (numericChar === false) && (specialChar === true)) {
    specialLength = 2;
    uppercaseLength = lengthCheck - 2;
  } else if ((lowerCase === false) && (upperCase === true) && (numericChar === true) && (specialChar === true)) {
    specialLength = 2;
    numericLength = 2;
    uppercaseLength = lengthCheck - 4;
  } else if ((lowerCase === false) && (upperCase === false) && (numericChar === true) && (specialChar === false)) {
    numericLength = lengthCheck;
  } else if ((lowerCase === false) && (upperCase === false) && (numericChar === true) && (specialChar === true)) {
    specialLength = 2;
    numericLength = lengthCheck - 2;
  } else if ((lowerCase === false) && (upperCase === false) && (numericChar === false) && (specialChar === true)) {
    specialLength = lengthCheck;
  } else {
    return;
  }
  
  console.log(lowecaseLength);
  console.log(uppercaseLength);
  console.log(numericLength);
  console.log(specialLength);
  function passwordRandom (arr) {
    let randomArray = Math.floor(Math.random() * arr.length);
    return arr[randomArray];
  }
  var lower = [];
  for (var i = 1; i <= lowecaseLength; i++) {
    lower.push(passwordRandom(lowerCaseString))
  }
  var passwordlower = lower.join ('');

  var upper = [];
  for (var x = 1; x <=uppercaseLength; x++) {
    upper.push(passwordRandom(uperCaseString));
  }
  var passwordupper = upper.join ('');

  var num = [];
  for ( var y = 1; y <= numericLength; y++) {
    num.push(passwordRandom(number));
  }
  var passwordnum = num.join ('');

  var spe = [];
  for ( var z = 1; z <= specialLength; z++) {
    spe.push(passwordRandom(specialString));
  }
  var passwordspecial = spe.join ('');

  function generatePassword () {
    var finalPassword = passwordspecial.concat(passwordupper, passwordlower, passwordnum);
    return finalPassword;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.placeholder = password;

  lowecaseLength = 0;
  uppercaseLength = 0;
  numericLength = 0;
  specialLength = 0;
  return;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


