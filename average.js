/*// ORIGINAL FIX THIS
function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }
  return sum / list.length;

console.log(average([3, 5, 7]));
}*/

function average(list) {
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));
