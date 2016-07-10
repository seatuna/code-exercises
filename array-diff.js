function diffArray(arr1, arr2) {
  var newArr = [];
  var combined =  arr1.concat(arr2);
  var count = {};

  for(var i = 0; i < combined.length; i++) {
    var num = combined[i];
      count[num] = count[num] ? count[num] + 1 : 1;
  }

  combined.forEach(function(v) {
    if(count[v] === 1) {
      newArr.push(v);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
