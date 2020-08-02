// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// generate random password 
  function generate (){

    // password length/complexity
    let complexity = document.getElementById("slider") 
    
    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    // create for loop to choose password characters
    for(var i=0; i <= complexity; i++){
    password=password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add password to text box
    document.getElementById("password").value = password;
}


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
