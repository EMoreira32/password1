// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {

    var valid = true;

    var length = prompt("How many characters? (at least 8 and no more than 128)", "12");
    console.log('length: ' + length);

    if (length < 8 || length > 128) {
        //alert("Password should be at least 8 and no more than 128 characters")
        return "Password should be at least 8 and no more than 128 characters";
        valid = false;
    }

    var charset = "",
        passw = "";

    if (valid) {
        var q2 = confirm("Use lowercase?");
        if (q2) { charset = "abcdefghijklmnopqrstuvwxyz"; }
        console.log('lowercase: ' + q2);

        var q3 = confirm("Use uppercase?");
        if (q3) { charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
        console.log('uppercase: ' + q3);

        var q4 = confirm("Use numeric?");
        if (q4) { charset += "0123456789";}
        console.log('numeric: ' + q4);

        var q5 = confirm("Use special characters? e.g. ");
        if (q5) { charset += "!@#?"; }
        console.log('special: ' + q5);
    }

    if (!q2 && !q3 && !q4 && !q5) {
        //alert("At least 1 criteria must be selected");
        return "At least 1 criteria must be selected";
        valid = false;
    }

    if (valid) {
        console.log(charset);
        for (var i = 0, n = charset.length; i < length; ++i) {
            passw += charset.charAt(Math.floor(Math.random() * n));
        }
    }

    return passw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
