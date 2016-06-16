// ROT13 Caesar Cipher

function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  var charCode;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
      charCode = arr[i].charCodeAt(0) + 13;
      if(charCode > 90) {
        charCode = arr[i].charCodeAt(0) - 13;
      }
      console.log(charCode);
      arr[i] = String.fromCharCode(charCode);
    } else {
      continue;
    }
  }

  return arr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("NARUTO SHIPPUDEN"));
