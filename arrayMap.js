var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(num) {
  var ans = ((num.x * num.x) + (num.y * num.y))
  var z = Math.sqrt(ans);
  return z;

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
console.log(result);