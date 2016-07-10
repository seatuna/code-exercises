function mutation(arr) {

  var trueCount = 0;

  console.log(arr[1].length);

  for(var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
      return false;
    } else {
      trueCount++;
    }
  }

  if(trueCount === arr[1].length) {
    return true;
  }
}

console.log(mutation(["hello", "HEY"]));
console.log(mutation(["hello", "Hello"]));
