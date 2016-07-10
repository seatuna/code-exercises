
function palindrome(str) {
  // Good luck!
  var newStr = str.toLowerCase().replace(/[^a-zA-Z\d]/g,"");
  var revStr = newStr.split('').reverse().join("");

  if(newStr === revStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
