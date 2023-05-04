// Assignment Code

//Variables for the code
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


//String of characters for password: strings of uppercase, lowercase, number and special character.
var lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
var uperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


// Write password to the #password input
function writePassword() {
  window.alert("Welcome to our password generator program!");
  //funtion to create a password
  function passwordCreate() {
    //User input the length of their password
    
    lengthCheck = window.prompt("How many characters in password do you want to create ?" + "\nPlease choose the length of your Password :");

    //Check the length of password, if it is smaller than 8 or longer than 128, they have to input the password again
    if(lengthCheck <8 || lengthCheck >128) {
      alert("Please choose the length of Password again (min 8 and max 128)");
      return passwordCreate();
    }
    //User choose the types of password which they want to include: lowercase, uppercase, number, and special character
    lowerCase = window.confirm("Do you want to include Lowecase character in your password ?");
    upperCase = window.confirm(" Do you want to include uppercase character in your password ? ");
    numericChar = window.confirm(" Do you want to include number character in your password ?");
    specialChar = window.confirm("Do you want to include special character in your password ?");
    //User have to choose type of password again because password has to have a least one kind of them
    if((lowerCase === false) && (upperCase === false) && (numericChar === false) && (specialChar === false)) {
      alert("Password has to have at least one type of characters" + "\nPlease click to generate password again!");
      return generateBtn.addEventListener("click", writePassword);
    }
    return;
  }
  passwordCreate();
  
  /*console.log(lengthCheck);
  console.log(lowerCase);
  console.log(upperCase);
  console.log (numericChar);
  console.log(specialChar);*/

  //Logical if to check the type of password and return the length of each types of the password
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
  } else if ((lowerCase === true) && (upperCase === true) && (numericChar === true) && (specialChar === true)) {
    uppercaseLength = 2;
    numericLength = 2;
    specialLength = 2;
    lowecaseLength = lengthCheck - 6;
  } else {
    return;
  }
  
  /*console.log(lowecaseLength);
  console.log(uppercaseLength);
  console.log(numericLength);
  console.log(specialLength);*/
  
  //Funtion to random a value of the array
  function passwordRandom (arr) {
    let randomArray = Math.floor(Math.random() * arr.length);
    return arr[randomArray];
  }
  //Create a random lowercase string with the return length and join it together
  var lower = [];
  for (var i = 1; i <= lowecaseLength; i++) {
    lower.push(passwordRandom(lowerCaseString))
  }
  var passwordlower = lower.join ('');
  //Create a random uppercase string with the return length and join it together
  var upper = [];
  for (var x = 1; x <=uppercaseLength; x++) {
    upper.push(passwordRandom(uperCaseString));
  }
  var passwordupper = upper.join ('');
  //Create a random number string with the return length and join it together
  var num = [];
  for ( var y = 1; y <= numericLength; y++) {
    num.push(passwordRandom(number));
  }
  var passwordnum = num.join ('');
  //Create a random special character string with the return length and join it together
  var spe = [];
  for ( var z = 1; z <= specialLength; z++) {
    spe.push(passwordRandom(specialString));
  }
  var passwordspecial = spe.join ('');
  //Funtion to join all strings which are created together into a new string and return it 
  function generatePassword () {
    var finalPassword = passwordspecial.concat(passwordupper, passwordlower, passwordnum);
    return finalPassword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 // Make password with a random order 
  var tempfinal = [];
  for ( var t =0 ; t < lengthCheck; t++){
    tempfinal.push(passwordRandom(password));
  }
  var final = tempfinal.join('');

  //Paste a new string password into html file
  passwordText.placeholder = final;

  //Update the length of each type of character for a new generator
  lowecaseLength = 0;
  uppercaseLength = 0;
  numericLength = 0;
  specialLength = 0;
  return;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


