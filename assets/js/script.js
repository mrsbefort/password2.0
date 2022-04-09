//Helper function
function random(choices) {
    var index = randomInt(choices.length)
    return choices[index]
  }
  function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit))//math.random give random number between 0-1. 
    //math.floor rounds down
  }
  
  function generatePassword() {
    //These are all the possible special characters, upper and lowercase letters, and numbers
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var specialCharacters = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
    var numbers = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9]
    var charArray = []
    var passLength = (window.prompt("What is the length of your password? Give a value between 8-128",""));
    var passLengthInt = parseInt(passLength);//Using parseInt to turn passLength into a number
    console.log(passLength)
   
   //Yes or No Questions Start Here
    if (passLength === (null)) {
      window.alert("Goodbye")
      return
    }

    if (isNaN(passLengthInt)) {
      window.alert("Password must be between 8-20 characters long")
      generatePassword();
    }  else  if  (passLengthInt >= 129 || passLengthInt <= 7) {
        window.alert("That is outside of the given range, please enter a different number.")
        generatePassword();
      }else {
      
      //Use concat method instead of push. 
        var passChar = window.confirm("Do you want to use special characters?")
          if (passChar === true){
            charArray = charArray.concat(specialCharacters)
          }
          var passNum = window.confirm("Do you want to use numbers?")
          if (passNum === true){
            charArray = charArray.concat(numbers)
          }
          var lowerCase1 = window.confirm("Do you want to use lowercase characters?")
          if (lowerCase1 === true){
            charArray = charArray.concat(lowerCase)
          }
          var upperCase1 = window.confirm("Do you want to use uppercase characters?")
          if (upperCase1 === true){
            charArray = charArray.concat(upperCase)
          }
          
        var passString = ''  //this variable creates the password
       
        for (var i=0; i<passLengthInt;i++) { //for loop to get one random different character each time
          //or you could say var i=1; i<=passLengthInt; i++)
            var randomChar = random(charArray)
          passString += randomChar
        }
        return passString
      }  
    }
  // 
  var generateBtn = document.querySelector("#generate");
  
  // 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener
  generateBtn.addEventListener("click", writePassword);