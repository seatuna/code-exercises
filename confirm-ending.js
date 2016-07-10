function confirmEnding(str, target) {

  var targetLength = target.length;

  console.log(str.substr(targetLength * -1));

  if (str.substring(targetLength * -1) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
