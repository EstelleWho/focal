/*TRY TO FIX THIS
var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return orignal.split('').reverseList().join('');
}*/

let input = process.argv[2];

const reverse = function(original) {
  return original.split('').reverse().join('');
};

if (input) {
  console.log(reverse(input));
}