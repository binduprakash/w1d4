//create a new array
//loop over the array
//push the length of each string into the array
//function muat have 2 arguments
//first one is array and the second one is callback function
//function should return a new array based on result of callback function
var words = ["ground", "control", "to", "major", "tom"];

function map(words, cb){
  var newArr = [];
  for(var i = 0; i < words.length; i++) {
    newArr.push(cb(words[i]));
  }
return newArr;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

